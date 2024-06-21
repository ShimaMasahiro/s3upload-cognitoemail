// Program Name: /utils/fileOperations.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-28
// Last Modified Date: 2024-03-28

/**
 * 指定されたインデックスのファイルをアップロードリストおよびヒストリーリストから削除する
 * @param {number} index - 削除するファイルのインデックス
 * @param {Array} uploadList - アップロードリスト
 * @param {Function} removeFile - アップロードリストからファイルを削除する関数
 * @param {Function} removeFileFromHistory - ヒストリーリストからファイルを削除する関数
 */

export const removeFileByIndex = (index, uploadList, removeFile, removeFileFromHistory) => {
  const fileId = uploadList[index].id;
  removeFile(fileId);
  removeFileFromHistory(fileId);
};