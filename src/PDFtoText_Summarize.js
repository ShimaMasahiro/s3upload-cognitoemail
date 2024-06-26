// Program Name: PDFtoText_summarize.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-07
// Last Modified Date: 2024-06-26

import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { ContentLayout,SpaceBetween} from "@cloudscape-design/components";
import { ContentHeader,ContainerHeader,ErrorAlert,SelectSummarize,InputFile,UploadList,UploadButton,HistoryList} from './components';
import CommonLayout from './components/CommonLayout';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import { handleFileChange } from './utils/handleFileChange';
import navigationLabels from './labels/navigationLabels';
import appLayoutLabels from './labels/labels.js';

const Content = () => {
    const [taskDetails, setTaskDetails] = useState({});
    const [transcription, setTranscription] = useState('');
    const [proofreading, setProofreading] = useState('');
    const [summarize, setSummarize] = useState('GPT');
    const [translate, setTranslate] = useState('');
    const [caption, setCaption] = useState('');
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [errors, setErrors] = useState({ upload: '', task: '' });
    const { uploadList, historyList, addFilesToUpload, removeFileById, updateFileInHistory, finalizeUpload } = useFileUploadManagement();

    const task = 'PDFtoText_Summarize';
    
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
        <ContentLayout header={<ContentHeader title={navigationLabels.PDFtoText_Summarize.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.PDFtoText_Summarize.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({ upload: '', task: '' })}/>
                    <SelectSummarize summarize={summarize} setSummarize={setSummarize} />
                    <InputFile accept=".pdf" label="PDFファイル" description="ファイルを選択してください。（.pdf）" onFileSelect={(e) => handleFileChange(e, addFilesToUpload)} />
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

function PDFtoText_Summarize() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default PDFtoText_Summarize;