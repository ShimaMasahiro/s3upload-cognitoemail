// Program Name: Multimodal_AI.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-27
// Last Modified Date: 2024-06-26

import React, {useState} from 'react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Auth, Storage } from 'aws-amplify';
import { ContentLayout,SpaceBetween} from "@cloudscape-design/components";
import { handleFileChange } from './utils/handleFileChange';
import { ContentHeader,ContainerHeader,ErrorAlert,InputText,InputFile,UploadList,UploadButton,HistoryList} from './components';
import CommonLayout from './components/CommonLayout';
import appLayoutLabels from './labels/labels.js';
import { useFileUploadManagement } from './hooks/useFileUploadManagement';
import { handleUploadClick } from './utils/handleUploadClick';
import navigationLabels from './labels/navigationLabels';
const TASK_NAME = 'Multimodal_AI';

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
            uploadList,
            setErrors,
            setVisibleAlert,
            updateFileInHistory,
            finalizeUpload
        );
    };

    return (
        <ContentLayout header={<ContentHeader title={navigationLabels.Multimodal_AI.title} />}>
            <SpaceBetween size="xs">
                <ContainerHeader headerText={navigationLabels.Multimodal_AI.headerText}>
                    <ErrorAlert errors={errors} onDismiss={() => setErrors({ upload: '' })}/>
                    <InputText />
                    <InputFile accept=".jpg,bmp,.png,.gif" label="画像ファイル" description="ファイルを選択してください。" onFileSelect={(e) => handleFileChange(e, addFilesToUpload)} />
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

function Multimodal_AI() {
    return (
        <CommonLayout ariaLabels={appLayoutLabels}>
            <Content />
        </CommonLayout>
    );
}

export default Multimodal_AI;