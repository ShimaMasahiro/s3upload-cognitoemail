// Program Name: c.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-20
// Last Modified Date: 2024-06-14

import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { ContentLayout, SpaceBetween } from "@cloudscape-design/components";
import { ContentHeader, ContainerHeader, ErrorAlert, InputEmail,SelectTranscription, SelectProofreading, SelectTranslate, SelectCaption, InputFile, UploadList, UploadButton, HistoryList } from './components';
import CommonLayout from './components/CommonLayout';
import { useEmail } from './hooks/useEmail';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import { handleFileChange } from './utils/handleFileChange';
import navigationLabels from './labels/navigationLabels';
import appLayoutLabels from './labels/labels.js';

const Content = () => {
    const [task, setTask] = useState('');
    const [taskDetails, setTaskDetails] = useState({});
    const [transcription, setTranscription] = useState('WhisperAPI');
    const [proofreading, setProofreading] = useState('GPT');
    const [summarize, setSummarize] = useState('');
    const [translate, setTranslate] = useState('');
    const [caption, setCaption] = useState('');
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [errors, setErrors] = useState({ email: '', upload: '', task: '' });
    const [email, handleEmailChange] = useEmail(); 
    const { uploadList, historyList, addFilesToUpload, removeFileById, updateFileInHistory, finalizeUpload } = useFileUploadManagement();

    useEffect(() => {
        const task = 'VideoAnalysys';
        const taskDetails = {
            transcription,
            proofreading,
            summarize,
            translate,
            caption,
        };
        setTask(task);
        setTaskDetails(JSON.stringify(taskDetails));
    }, [transcription, proofreading, summarize, translate, caption]);

    const removeFileByIndex = (index) => {
        const fileId = uploadList[index].id;
        removeFileById(fileId);
    };

    const uploadAndReset = () => {
        handleUploadClick(
            task,
            taskDetails,
            email,
            uploadList,
            setErrors,
            setVisibleAlert,
            updateFileInHistory,
            finalizeUpload
        );
    };

    return (
        <ContentLayout header={<ContentHeader title={navigationLabels.VideoAnalysys.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.VideoAnalysys.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({ email: '', upload: '', task: '' })} />
                    <InputEmail email={email} onChange={handleEmailChange} />
                    <SelectTranscription transcription={transcription} setTranscription={setTranscription} />
                    <SelectProofreading proofreading={proofreading} setProofreading={setProofreading} showNoneOption={false} />
                    <SelectTranslate translate={translate} setTranslate={setTranslate} showNoneOption={true} />
                    <SelectCaption caption={caption} setCaption={setCaption} />
                    <InputFile accept=".mp4,.mp3" label="動画ファイル" description="ファイルを選択してください。（.mp4 .mp3）" onFileSelect={(e) => handleFileChange(e, addFilesToUpload)} />
                    <UploadList items={uploadList} onDismiss={removeFileByIndex} />
                    <UploadButton label="アップロード" onUpload={uploadAndReset} />
                </ContainerHeader>
                <ContainerHeader headerText="履歴">
                    <HistoryList historyList={historyList} />
                </ContainerHeader>
            </SpaceBetween>
        </ContentLayout>
    );
};

function VideoAnalysys() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default VideoAnalysys;
