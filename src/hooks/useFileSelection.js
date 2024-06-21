// Program Name: hooks/useFileSelection.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-13
// Last Modified Date: 2024-03-13

/**
 * ファイル選択とファイル履歴の状態管理を行う
 * @return {Array} 選択されたファイルのリスト、ファイル履歴のリスト、およびファイル選択イベントハンドラを含む配列。
 * 
 * ファイル選択時に発生するイベントを処理し、選択されたファイルとその履歴を状態として管理する。
 * `handleFileSelectionChange`メソッドはファイル選択の変更を処理し、
 * 選択された各ファイルに対して一意のID、ラベル、説明などの情報を含むオブジェクトを作成して状態にセットする。
 * ファイル履歴は選択されたファイルの詳細を保持し、アップロードプロセスで使用する。
 */

import { useState } from 'react';
import { formatBytes } from '../utils/utils';

const useFileSelection = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileHistory, setFileHistory] = useState([]);

    const handleFileSelectionChange = async (e) => {
        e.preventDefault();
        let tempSelectedFiles = [];
        const now = new Date();
        const timestamp = now.getTime();

        setFileHistory([]);

        Array.from(e.target.files).forEach((file, i) => {
            const uniqueId = `${timestamp}_${i}`;
            tempSelectedFiles.push({
                id: uniqueId,
                label: file.name,
                labelTag: formatBytes(file.size),
                description: 'File type: ' + file.type,
                icon: 'file',
                file: file,
            });
            // fileHistoryへの追加
            setFileHistory(prevFileHistory => [...prevFileHistory, {
                id: uniqueId,
                filename: file.name,
                filetype: file.type,
                filesize: formatBytes(file.size),
                percentage: 0,
                speed: 0,
                remainingTime: undefined,
                status: 'in-progress',
            }]);
        });

        setSelectedFiles(tempSelectedFiles);
    };

    return [selectedFiles, fileHistory, handleFileSelectionChange];
};

export default useFileSelection;