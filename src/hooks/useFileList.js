// Program Name: hooks/useFileList.js
// Author: SHIMA Masahiro
// Creation Date: 2024-04-06
// Last Modified Date: 2024-04-06

/**
 * アプリケーション内のファイルリストの状態を管理する
 * @return {Array} ファイルリスト、新しいファイルを追加する関数、特定のファイルを削除する関数、リストをリセットする関数を含む配列。
 * 
 * - `addNewFiles`: ユーザーが選択した新しいファイルをリストに追加し、
 * ユニークID、ファイル名、サイズ、タイプなどのメタデータを取得する。
 * - `removeFileById`: ユニークIDに基づいてリストから特定のファイルを削除する。
 * - `resetFileList`: ファイルリスト全体をクリアする。
 */
 
import { useState } from 'react';
import { formatBytes } from '../utils/utils';
// import { loadMetadata } from '../utils/loadMetadata';

export const useFileList = () => {
    // ファイルリストの状態管理
    const [fileList, setFileList] = useState([]);

    // 新しいファイルをリストに追加する関数
    const addNewFiles = (files, timestamp) => {
        const newFiles = Array.from(files).map((file, index) => ({
            id: `${timestamp}_${index}`,
            label: file.name,
            labelTag: formatBytes(file.size),
            description: `File type: ${file.type}`,
            icon: 'file',
            file: file,
        }));
        setFileList(prevList => [...prevList, ...newFiles]);
    };

    // 特定のファイルをリストから削除する関数
    const removeFileById = (fileId) => {
        // IDでフィルタリングして削除
        setFileList(prevList => prevList.filter(file => file.id !== fileId)); 
    };

    // ファイルリストをリセットする関数
    const resetFileList = () => {
        setFileList([]); // 空の配列をセットしてリセット
    };

    // フックから返す値
    return [fileList, addNewFiles, removeFileById, resetFileList];
};
