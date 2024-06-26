// Program Name: /utils/metadata.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-15
// Last Modified Date: 2024-05-29

/**
 * アップロードするファイルのメタデータを生成する
 * @param {string} username - アップロードするユーザーの名前。
 * @param {string} email - アップロードするユーザーのメールアドレス。
 * @param {string} task - タスク名。アップロードするファイルタイプを指定
 * @param {string} taskDetails - タスク詳細。タスクの詳細情報を含む
 * @param {File} file - アップロードするファイルオブジェクト。
 * @return {Object} メタデータを含むオブジェクト。ユーザー名、メール、タスク名、ファイルサイズを含む
 */

export const createUploadMetadata = (username, email, task, taskDetails, file) => {
  return {
    username: username,
    email: email,
    task: task,
    taskDetails: taskDetails, // 既に文字列化
    fileSize: file.size.toString(),
  };
};