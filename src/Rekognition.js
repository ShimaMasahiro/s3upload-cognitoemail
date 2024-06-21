// Program Name: Rekognition.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-06-04
// Last Modified Date: 2024-06-04

import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { ContentLayout,SpaceBetween} from "@cloudscape-design/components";
import { ContentHeader,ContainerHeader,ErrorAlert,InputEmail,InputFile,UploadList,UploadButton,HistoryList} from './components';
import CommonLayout from './components/CommonLayout';
import { useEmail } from './hooks/useEmail';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import { handleFileChange } from './utils/handleFileChange';
import navigationLabels from './labels/navigationLabels';
import appLayoutLabels from './labels/labels.js'; 

const Content = () => {
    const [taskDetails, setTaskDetails] = useState({});
    const [transcription, setTranscription] = useState('');
    const [proofreading, setProofreading] = useState('');
    const [summarize, setSummarize] = useState('');
    const [translate, setTranslate] = useState('');
    const [caption, setCaption] = useState('');
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [errors, setErrors] = useState({ email: '', upload: '', task: '' });
    const [email, handleEmailChange] = useEmail(); 
    const { uploadList, historyList, addFilesToUpload, removeFileById, updateFileInHistory, finalizeUpload } = useFileUploadManagement();

    const task = 'Rekognition';

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
            email,
            uploadList,
            setErrors,
            setVisibleAlert,
            updateFileInHistory,
            finalizeUpload
        );
    };

    return (
        <ContentLayout header={<ContentHeader title={navigationLabels.Rekognition.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.Rekognition.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({ email: '', upload: '', task: '' })}/>
                    <InputEmail email={email} onChange={handleEmailChange} />
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

function Rekognition() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default Rekognition;