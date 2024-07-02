// Program Name: Transcription_Proofreading.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-20
// Last Modified Date: 2024-07-01

import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { ContentLayout,SpaceBetween} from "@cloudscape-design/components";
import { ContentHeader,ContainerHeader,ErrorAlert,InputEmail,RadioTranscription, RadioProofreading, InputFile,UploadList,UploadButton,HistoryList} from './components';
import CommonLayout from './components/CommonLayout';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import { handleFileChange } from './utils/handleFileChange';
import navigationLabels from './labels/navigationLabels';
import appLayoutLabels from './labels/labels.js';

const Content = () => {
    const [taskDetails, setTaskDetails] = useState({});
    const [transcription, setTranscription] = useState('WhisperAPI');
    const [proofreading, setProofreading] = useState('GPT');
    const [summarize, setSummarize] = useState('');
    const [translate, setTranslate] = useState('');
    const [caption, setCaption] = useState('');
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [errors, setErrors] = useState({ upload: '', task: '' });
    const { uploadList, historyList, addFilesToUpload, removeFileById, updateFileInHistory, finalizeUpload } = useFileUploadManagement();

    const task = 'Transcription_Proofreading';
        
    useEffect(() => {
        const taskDetails = {
            transcription,
            proofreading,
            summarize,
            translate,
            caption,
        };
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
            uploadList,
            setErrors,
            setVisibleAlert,
            updateFileInHistory,
            finalizeUpload
        );
    };

    return (
        <ContentLayout header={<ContentHeader title={navigationLabels.Transcription_Proofreading.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.Transcription_Proofreading.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({upload: '', task: '' })}/>

                    <RadioTranscription transcription={transcription} setTranscription={setTranscription} />
                    <RadioProofreading proofreading={proofreading} setProofreading={setProofreading} showNoneOption={false} />
                    <InputFile accept=".mp4" label="動画ファイル" description="ファイルを選択してください。（.mp4）" onFileSelect={(e) => handleFileChange(e, addFilesToUpload)} />
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

function Transcription_Proofreading() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default Transcription_Proofreading;