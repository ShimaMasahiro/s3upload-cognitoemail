// Program Name: /utils/handleUpload.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-29
// Last Modified Date: 2024-06-26

// ファイルをアップロードし、進捗状況を更新する。
/** 
 * @param {string} taskName - 実行するタスクの名前
 * @param {string} taskDetails - アップロードタスクの詳細。
 * @param {string} email - ユーザーのメールアドレス
 * @param {Array} uploadList - アップロードするファイルのリスト
 * @param {Function} setErrors - エラー状態を設定する関数
 * @param {Function} setVisibleAlert - アラート表示状態を設定する関数
 * @param {Function} updateFileHistory - アップロードファイルの履歴を更新する関数
 * @param {Function} clearFiles - アップロードリストをクリアする関数
 * 
 * アップロードリスト内の各ファイルに対してアップロードを実行し、
 * プログレスコールバックを使用して進捗状況を更新する。
 * すべてのファイルがアップロードされた後、アップロードリストをクリアする。
 */
 
import { getJSTTimestamp, calculateUploadProgress } from './utils';
import { createUploadMetadata } from './metadata';
import { Auth, Storage } from 'aws-amplify';

export const handleUpload = async (
  taskName,
  taskDetails,
  uploadList,
  setErrors,
  setVisibleAlert,
  updateFileHistory,
  clearFiles,
) => {
  const startTime = Date.now();

  const currentUser = await Auth.currentAuthenticatedUser();
  const username = currentUser.attributes.email; 
  const email = currentUser.attributes.email;

  const uploadPromises = uploadList.map(async (fileItem) => {
    const file = fileItem.file;
    const timestamp = getJSTTimestamp();
    const customFileName = `${taskName}/${timestamp}/${file.name}`;
    const metadata = createUploadMetadata(username, email, taskName, taskDetails, file);

    try {
      await Storage.put(customFileName, file, {
        contentType: file.type,
        metadata: metadata,
        progressCallback: (progress) => {
          const { percentage, speed, remainingTime, status } = calculateUploadProgress(progress, startTime);
          updateFileHistory(fileItem.id, { percentage, speed, remainingTime, status });
        },
      });
      // アップロードが完了した後、速度と残り時間の情報をクリア
      updateFileHistory(fileItem.id, { speed: null, remainingTime: null });

    } catch (error) {
      console.error("Error during upload:", error);
      setErrors(prevErrors => ({
        ...prevErrors,
        upload: `ファイルのアップロードに失敗しました。エラー詳細：${error.message || '不明なエラー'}`
      }));
      setVisibleAlert(true);
    }
  });

  await Promise.all(uploadPromises);
  clearFiles();
};