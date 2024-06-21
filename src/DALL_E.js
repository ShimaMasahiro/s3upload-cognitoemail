// Program Name: DALL_E.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-07
// Last Modified Date: 2024-05-29

import React, {useState} from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { ContentLayout,SpaceBetween} from "@cloudscape-design/components";
import { handleFileChange } from './utils/handleFileChange';
import { ContentHeader,ContainerHeader,ErrorAlert,InputEmail,InputFile,UploadList,UploadButton,HistoryList} from './components';
import CommonLayout from './components/CommonLayout';
import appLayoutLabels from './labels/labels.js';
import { useEmail } from './hooks/useEmail';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import navigationLabels from './labels/navigationLabels';
const TASK_NAME = 'DALL-E';// 注：-と_の相違 aws特定サービスで不可のため
const TASK_DETAILS ='{"imagegeneration":"DALL-E3"}';

const Content = () => {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [errors, setErrors] = useState({ email: '', upload: '' });
    const [email, handleEmailChange] = useEmail(); 
    const {uploadList,historyList,addFilesToUpload,removeFileById,updateFileInHistory,finalizeUpload} = useFileUploadManagement();
    const removeFileByIndex = (index) => {
        const fileId = uploadList[index].id;
        removeFileById(fileId);
    };
    const uploadAndReset = () => {
        handleUploadClick(
            TASK_NAME,
            TASK_DETAILS,
            email,
            uploadList,
            setErrors,
            setVisibleAlert,
            updateFileInHistory,
            finalizeUpload
        );
    };

    return (
        <ContentLayout header={<ContentHeader title={navigationLabels.DALL_E.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.DALL_E.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({ email: '', upload: '', task: '' })}/>
                    <InputEmail email={email} onChange={handleEmailChange} />
                    <InputFile accept=".txt" label="テキストファイル" description="ファイルを選択してください。（.txt）" onFileSelect={(e) => handleFileChange(e, addFilesToUpload)} />
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

function DALL_E() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default DALL_E;