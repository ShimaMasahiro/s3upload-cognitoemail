// Program Name: SelectTranscription.js
// Author: SHIMA Masahiro
// Creation Date: 2024-05-31
// Last Modified Date: 2024-06-03

import React from 'react';
import { FormField, SpaceBetween } from "@cloudscape-design/components";

const SelectTranscription = ({ transcription, setTranscription }) => (
    <FormField 
        className="form-field"
        label="文字起こし"
        description="文字起こしするサービスを選択してください。">
        <SpaceBetween direction="horizontal" size="xxl">
            <div className="radio-button">
                <input type="radio" value="WhisperAPI" name="transcription"
                    onChange={() => setTranscription('WhisperAPI')} 
                    checked={transcription === 'WhisperAPI'} 
                /> Whisper
            </div>
            <div className="radio-button">
                <input type="radio" value="AmazonTranscribe" name="transcription"
                    onChange={() => setTranscription('AmazonTranscribe')} 
                    checked={transcription === 'AmazonTranscribe'} 
                /> Amazon Transcribe
            </div>
        </SpaceBetween>
    </FormField>
);

export default SelectTranscription;