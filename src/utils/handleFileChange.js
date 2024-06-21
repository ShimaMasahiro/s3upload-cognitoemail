// Program Name: /utils/handleFileChange.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-28
// Last Modified Date: 2024-03-30

/**
 * ファイル選択イベントハンドラー。選択されたファイルをアップロードリストとヒストリーリストに追加する。
 * @param {Event} e - ファイル選択イベントオブジェクト。
 * @param {Function} addFilesToUpload - ファイルをアップロードリストとヒストリーリストに追加する関数。
 * 
 * ファイル入力フィールドのonChangeイベントによって呼び出される。
 * 選択されたファイルはアップロードリストに追加され、ヒストリーリストにも同時に追加される。
 */
export const handleFileChange = (e, addFilesToUpload) => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    addFilesToUpload(e.target.files, timestamp);
};