// Program Name: /utils/handleUploadClick.js
// Author: SHIMA Masahiro
// Creation Date: 2024-03-29
// Last Modified Date: 2024-05-29

/**
 * ユーザーがアップロードボタンをクリックしたときに実行される。
 * 
 * @param {string} taskName - アップロードタスクの名前。
 * @param {string} taskDetails - アップロードタスクの詳細
 * @param {string} email - ユーザーのメールアドレス。
 * @param {Array} uploadList - アップロードするファイルのリスト。
 * @param {Function} setErrors - エラー状態を設定する関数。
 * @param {Function} setVisibleAlert - アラート表示状態を設定する関数。
 * @param {Function} updateFileHistory - アップロード履歴を更新する関数。
 * @param {Function} clearFiles - アップロードリストをクリアする関数。
 */

import { handleUpload } from './handleUpload';
import { validateForm } from './validation';  // これを追加

export const handleUploadClick = async (
    taskName,
    taskDetails,
    email,
    uploadList,
    setErrors,
    setVisibleAlert,
    updateFileHistory,
    clearFiles,
) => {
    const errors = validateForm(email, uploadList);  // これを追加

    if (Object.keys(errors).length > 0) {  // これを追加
        setErrors(errors);  // これを追加
        setVisibleAlert(true);  // これを追加
        return;  // これを追加
    }

    await handleUpload(
        taskName,
        taskDetails,
        email,
        uploadList,
        setErrors,
        setVisibleAlert,
        updateFileHistory,
        clearFiles,
    );
};
