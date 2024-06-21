// Program Name: validation.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-14
// Last Modified Date: 2024-03-14

// フォームデータのバリデーションを行う関数
/**
 * メールアドレスとアップロードリストの入力値を検証する。
 * @param {string} email - 検証するメールアドレス。
 * @param {Array} uploadList - アップロードするファイルのリスト。
 * @return {Object} エラーがある場合、キーとして項目名、値としてエラーメッセージを含む。
 * 
 * メールアドレスが空、または無効な形式の場合、エラーメッセージを設定する。
 * アップロードリストが空の場合、エラーメッセージを設定する。
 * 各項目に対して検証を行い、エラーがある場合はエラーオブジェクトに追加する。
 */
 
import { validateEmail } from './utils';

export const validateForm = (email, uploadList) => {
  let errors = {};

  if (!email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!validateEmail(email)) {
    errors.email = "無効なメールアドレスです。正しいメールアドレスを入力してください。";
  }

  if (uploadList.length === 0) {
    errors.upload = 'ファイルを選択してください。';
  }

  return errors;
};