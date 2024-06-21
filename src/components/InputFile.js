// Program Name: /components/InputFile.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-21
// Last Modified Date: 2024-03-30

import React, { useRef } from 'react';
import { FormField, Button } from '@cloudscape-design/components';

const InputFile = ({ accept, label, description, onFileSelect }) => {
    const hiddenFileInput = useRef(null);
    
    const handleChange = (event) => {
        onFileSelect(event); // 親コンポーネントにイベントを渡す
        event.target.value = ''; // ファイル入力をリセットする
    };

    const handleClick = () => hiddenFileInput.current.click();

    return (
        <FormField
            className="form-field"
            label={label} 
            description={description}
        >
            <Button 
                onClick={handleClick}
                iconAlign="left" 
                iconName="upload"
            >
                ファイル選択
            </Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
                accept={accept}
                multiple
            />
        </FormField>
    );
};

export default InputFile;
