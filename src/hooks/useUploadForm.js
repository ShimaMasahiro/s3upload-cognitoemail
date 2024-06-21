// Program Name: hooks/useUploadForm.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-14
// Last Modified Date: 2024-03-14

/**
 * アップロードフォームの状態管理を行う
 * @param {string} initialEmail - 初期メールアドレス
 * @param {Array} initialUploadList - 初期アップロードリスト
 * @param {Function} handleUpload - アップロード処理を実行する関数
 * @return {Object} フォームの状態およびセッター関数を含むオブジェクト
 * 
 * アップロードフォームのメールアドレス、アップロードリスト、エラー、アラートを管理する。
 * `handleUploadClick`
 * フォームのバリデーションを行い、問題がなければアップロードを実行する。
 * エラーがある場合は、エラー状態を更新し、アラートを表示する。
 */
 
import { useState } from 'react';
import { validateForm } from '../utils/validation';

const useUploadForm = (initialEmail, initialUploadList, handleUpload) => {
    const [email, setEmail] = useState(initialEmail);
    const [uploadList, setUploadList] = useState(initialUploadList);
    const [errors, setErrors] = useState({});
    const [visibleAlert, setVisibleAlert] = useState(false);

  const processFormAndUpload = () => {
    const newErrors = validateForm(email, uploadList);
    setErrors(newErrors);
    setVisibleAlert(Object.keys(newErrors).length > 0);
    if (Object.keys(newErrors).length === 0) {
        handleUpload();
    }
  };
  return { email, setEmail, uploadList, setUploadList, errors, visibleAlert, handleUploadClick };
};

const handleUploadClick = async (
    taskName,
    email,
    uploadList,
    setErrors,
    setVisibleAlert,
    updateFileInHistory,
    resetUploadAndHistory
) => {
    const newErrors = validateForm(email, uploadList);
    setErrors(newErrors);
    setVisibleAlert(Object.keys(newErrors).length > 0);

    if (Object.keys(newErrors).length === 0) {
        const uploadSuccess = await handleUpload(
            taskName,
            email,
            uploadList,
            updateFileInHistory
        );
    }
};

export default useUploadForm;
