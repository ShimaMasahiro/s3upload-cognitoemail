// Program Name: EMC_HLS.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-07
// Last Modified Date: 2024-06-26

import React, {useState} from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { ContentLayout,SpaceBetween} from "@cloudscape-design/components";
import { handleFileChange } from './utils/handleFileChange';
import { ContentHeader,ContainerHeader,ErrorAlert,InputFile,UploadList,UploadButton,HistoryList} from './components';
import CommonLayout from './components/CommonLayout';
import appLayoutLabels from './labels/labels.js';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import navigationLabels from './labels/navigationLabels';
const TASK_NAME = 'EMC_HLS';
const TASK_DETAILS ='{"mediaconvert":"EMC_HLS"}';

const Content = () => {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [errors, setErrors] = useState({ upload: '' });
    const {uploadList,historyList,addFilesToUpload,removeFileById,updateFileInHistory,finalizeUpload} = useFileUploadManagement();
    const removeFileByIndex = (index) => {
        const fileId = uploadList[index].id;
        removeFileById(fileId);
    };
    const uploadAndReset = () => {
        handleUploadClick(
            TASK_NAME,
            TASK_DETAILS,
            uploadList,
            setErrors,
            setVisibleAlert,
            updateFileInHistory,
            finalizeUpload
        );
    };

    return (
        <ContentLayout header={<ContentHeader title={navigationLabels.EMC_HLS.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.EMC_HLS.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({ upload: '' })}/>
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

function EMC_HLS() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default EMC_HLS;