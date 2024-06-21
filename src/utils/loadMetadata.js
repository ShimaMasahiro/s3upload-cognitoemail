// Program Name: utils/loadMetadata.js
// Author: SHIMA Masahiro
// Creation Date: 2024-03-29
// Last Modified Date: 2024-04-06

/**
 * アップロードするファイルのメタデータを読み込む
 * @param {File} file - メタデータを読み込むファイルオブジェクト。
 * @returns {Promise} メタデータの読み込み結果を含む。
 * 
 * 指定されたファイルオブジェクトからメタデータを読み込む。
 * ファイルタイプに応じて動画または音声のメディア要素を生成し、
 * メディアのメタデータが読み込まれた際に、再生時間などの情報を返す。
 * メタデータの読み込みに失敗した場合は、エラーを拒否する。
 */

import { formatDuration } from './utils';

// ファイルのメタデータを読み込む
export function loadMetadata(file) {
    // プロミスを返し、非同期処理を開始
    return new Promise((resolve, reject) => {
        // ファイルからメディアソースのURLを生成
        const url = URL.createObjectURL(file);
        // ファイルタイプに応じて動画または音声要素を生成
        const media = file.type.startsWith('video/') ? document.createElement('video') : new Audio();
        // メディア要素のソースを設定
        media.src = url;
        // メディア要素の読み込みを開始
        media.load();

        // メディアのメタデータが読み込まれたら実行
        media.onloadedmetadata = () => {
            // 再生時間を取得
            // const duration = media.duration;
            // 再生時間をフォーマット
            // let formattedDuration = formatDuration(duration);

            // 解像度を取得
            // const resolution = `${media.videoWidth}x${media.videoHeight}`;

            // 読み込みの成功を通知し、結果を解決
            resolve({
                //playbackDuration: formattedDuration, // 再生時間（動画の場合のみ）
                //resolution: resolution, // 解像度（動画の場合のみ）
                percentage: 0, // アップロード進行状況パーセンテージ
                speed: undefined, // 速度
                remainingTime: undefined, // 残り時間
                status: 'in-progress', // 状態
            });
        };
        // メディアの読み込みに失敗したら
        // メタデータ読み込み失敗を通知
        media.onerror = () => reject(new Error('Metadata loading failed')); 
    });
}
