// Program Name: HistoryList.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-01-26
// Last Modified Date: 2024-06-26

/**
 * ヒストリーリストを表示する
 * @param {Array} historyList - 表示する履歴アイテムのリスト
 * @return {JSX.Element} ヒストリーリストを表示するReactコンポーネント
 * 
 * 各履歴アイテムにはファイル名、形式、サイズ、再生時間、進行状態（プログレスバー）、
 * 伝送速度、残り時間が表示される。
 * `ProgressBar`はファイルのアップロード進行状態を視覚的に示します。
 * 伝送速度と残り時間は、データが利用可能な場合のみ表示される。
 */
 
import React, { useState, useEffect } from 'react';
import { ProgressBar } from "@cloudscape-design/components";

const HistoryList = ({ historyList }) => {
    return (
        <>
            {historyList.map((item, index) => {
            const uniqueKey = `${item.id}-${Date.now()}-${index}`;
                return (
                    <div key={uniqueKey} className="history-item">
                        <p className="file-name">・{item.filename}</p>
                        <p className="file-info">
                            {`${item.filetype}, File Size：${item.filesize}`}
                            {item.playbackDuration && `, 再生時間: ${item.playbackDuration}`}
                        </p>
                        <ProgressBar
                            key={uniqueKey}
                            status={item.status}
                            value={item.percentage}
                            variant="standalone"
                            resultText={
                                <React.Fragment>
                                    ファイルのアップロードに成功しました。
                                    処理完了後、ログインアカウントにメールが送信されます。
                                </React.Fragment>
                            }
                        />
                        <p className="file-info">
                            {item.speed ? `伝送速度: ${item.speed.toFixed(1)} MB/s ` : ''}
                            {item.remainingTime ? `残り時間: ${Math.round(item.remainingTime)} sec` : ''}
                            {/* 動画ファイルの場合にのみ再生時間を表示 */}
                            {/* item.playbackDuration && item.filetype.startsWith('video/') && `, 再生時間: ${item.playbackDuration}` */}
                            {/* 動画ファイルの場合にのみ解像度を表示 */}
                            {/* item.resolution && item.filetype.startsWith('video/') && `, 解像度: ${item.resolution}` */}
                       </p>
                    </div>
                );
            })}
        </>
    );
};

export default HistoryList;