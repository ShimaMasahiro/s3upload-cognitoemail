// Program Name: /utils/handleUploadClick.js
// Author: SHIMA Masahiro
// Creation Date: 2024-03-29
// Last Modified Date: 2024-06-26

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
import { validateForm } from './validation';

export const handleUploadClick = async (
    taskName,
    taskDetails,
    uploadList,
    setErrors,
    setVisibleAlert,
    updateFileHistory,
    clearFiles,
) => {
    const errors = validateForm(uploadList);

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        setVisibleAlert(true);
        return; 
    }

    await handleUpload(
        taskName,
        taskDetails,
        uploadList,
        setErrors,
        setVisibleAlert,
        updateFileHistory,
        clearFiles,
    );
};
