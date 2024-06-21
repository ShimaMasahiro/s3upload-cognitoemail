// Program Name: hooks/useFileUploadManagement.js
// Author: SHIMA Masahiro
// Creation Date: 2024-03-30
// Last Modified Date: 2024-03-31

import { useState } from 'react';
import { formatBytes } from '../utils/utils';

export const useFileUploadManagement = () => {
    const [uploadList, setUploadList] = useState([]);
    const [historyList, setHistoryList] = useState([]);

    const addFilesToUpload = (files, timestamp) => {
        const newFiles = Array.from(files).map((file, index) => ({
            id: `${timestamp}_${index}`,
            label: file.name,
            labelTag: formatBytes(file.size),
            description: `File type: ${file.type}`,
            icon: 'file',
            file: file,
        }));
        setUploadList(prevList => [...prevList, ...newFiles]);

        // 同時に履歴リストにも追加
        const newHistoryItems = newFiles.map(file => ({
            id: file.id,
            filename: file.label,
            filetype: file.description,
            filesize: file.labelTag,
            percentage: 0,
            speed: 0,
            remainingTime: undefined,
            status: 'in-progress',
        }));
        setHistoryList(prevHistory => [...prevHistory, ...newHistoryItems]);
    };

    const removeFileById = (fileId) => {
        // アップロードリストから削除
        setUploadList(currentList => currentList.filter(file => file.id !== fileId));
        // ヒストリーリストから、アップロード中（'in-progress' 状態）の同じIDのファイルを削除
        setHistoryList(currentHistory => currentHistory.filter(history => !(history.id === fileId && history.status === 'in-progress')));
    };

    const removeFileFromHistory = (fileId) => {
        // ヒストリーリストからの削除
        setHistoryList(currentHistory => currentHistory.filter(history => history.id !== fileId));
    };

    const resetUploadList = () => {
        // アップロードリストだけをクリアする
        setUploadList([]); 
    };

    const resetUploadAndHistory = () => {
        setUploadList([]);
        setHistoryList([]);
    };

    const updateFileInHistory = (fileId, updates) => {
        setHistoryList(current => current.map(item => item.id === fileId ? { ...item, ...updates } : item));
    };

    // アップロード成功時の処理を定義
    const finalizeUpload = () => {
        // アップロードリストをクリアする
        resetUploadList();
        // ヒストリーリストは更新せずにそのまま保持する
    };

    return {
        uploadList,
        historyList,
        addFilesToUpload,
        removeFileById,
        removeFileFromHistory,
        resetUploadList,
        finalizeUpload,
        updateFileInHistory
    };
};