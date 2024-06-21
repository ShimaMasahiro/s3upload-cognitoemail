// Program Name: /component/UploadButton.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-30
// Last Modified Date: 2024-03-30

import React from 'react';
import { FormField, SpaceBetween, Button } from '@cloudscape-design/components';

const UploadButton = ({ onUpload, label }) => {
    return (
        <FormField 
            className="form-field"
        >
            <SpaceBetween 
                alignItems="end" 
                size="xxl">
                <Button 
                    variant="primary" 
                    onClick={onUpload}>
                    {label || 'アップロード'}
                </Button>
            </SpaceBetween>
        </FormField> 
    );
};

export default UploadButton;