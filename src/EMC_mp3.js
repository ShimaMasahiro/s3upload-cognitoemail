// Program Name: EMC_mp3.js
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
const TASK_NAME = 'EMC_mp3';
const TASK_DETAILS ='{"mediaconvert":"EMC_mp3"}';

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
        <ContentLayout header={<ContentHeader title={navigationLabels.EMC_mp3.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.EMC_mp3.headerText}>
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

function EMC_mp3() {
  return (
    <CommonLayout ariaLabels={appLayoutLabels}>
      <Content />
    </CommonLayout>
  );
}

export default EMC_mp3;