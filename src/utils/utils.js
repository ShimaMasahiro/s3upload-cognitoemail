// Program Name: /utils/utils.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-19
// Last Modified Date: 2024-02-29

// バイトを適切な単位にフォーマットする
/**
 * ファイルサイズを人間が読みやすい形式にフォーマットする。
 * @param {number} a - ファイルサイズをバイト単位で。
 * @param {number} b - 小数点以下の桁数（デフォルトは2）。
 * @param {number} k - 単位変換の基数（デフォルトは1024）。
 * @return {string} フォーマットされたファイルサイズ。
 */
 
export const formatBytes = (a, b = 2, k = 1024) => {
    let d = Math.floor(Math.log(a) / Math.log(k));
    return 0 === a ? "0 Bytes" : parseFloat((a / Math.pow(k, d)).toFixed(Math.max(0, b))) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
};

// メールアドレスのバリデーション関数
/**
 * メールアドレスの形式が正しいかどうかを検証する。
 * @param {string} email - 検証するメールアドレス。
 * @return {boolean} メールアドレスの形式が正しい場合はtrue、そうでない場合はfalse。
 */
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// JST（日本標準時）のタイムスタンプを取得する関数
/**
 * 日本標準時（JST）のタイムスタンプを生成する。
 * @return {string} 日本標準時のタイムスタンプ（年/月/日/時/分）。
 */
export const getJSTTimestamp = () => {
  const now = new Date();
  const jstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // JSTのタイムゾーンに変換
  return jstDate.toISOString().replace(/:/g, '').replace(/-/g, '/').replace('T', '/').slice(0, -5);
};

// 再生時間を適切なフォーマットに変換する関数
/**
 * 再生時間を時間、分、秒のフォーマットに変換する。
 * @param {number} duration - 再生時間を秒単位で。
 * @return {string} フォーマットされた時間（HH:MM:SS）。
 */
export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);
  return [hours, minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v,i) => v !== "00" || i > 0)
    .join(":");
};

/**
 * アップロードの進行状況を計算し、関連データを返す関数
 * @param {ProgressEvent} progress - アップロードのプログレスイベント
 * @param {Date} startTime - アップロード開始時の日時オブジェクト
 * @returns {Object} 進行状況（パーセンテージ）、速度（MB/s）、残時間（秒）、ステータスを含むオブジェクト
 */
export const calculateUploadProgress = (progress, startTime) => {
  const percentage = Math.round((progress.loaded / progress.total) * 100);
  const now = new Date();
  const elapsedTime = (now - startTime) / 1000; // 経過時間を秒単位で計算
  const speed = progress.loaded / elapsedTime; // バイト/秒
  const remainingBytes = progress.total - progress.loaded;
  const remainingTime = speed > 0 ? remainingBytes / speed : undefined; // 残り時間を秒単位で計算
  const status = percentage === 100 ? 'success' : 'in-progress'; // ステータスの決定

  return {
    percentage,
    // バイト/秒からMB/sへ変換し、小数点以下1桁で丸める
    speed: Math.round((speed / 1024 / 1024) * 10) / 10, 
    remainingTime,
    status, // ステータスを追加
  };
};