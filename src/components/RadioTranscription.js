// Program Name: RadioTranscription.js
// Author: SHIMA Masahiro
// Creation Date: 2024-06-29
// Last Modified Date: 2024-06-28

import React from 'react';
import { FormField } from "@cloudscape-design/components";
import RadioGroup from "@cloudscape-design/components/radio-group";

const RadioTranscription = ({ transcription, setTranscription }) => {
    const items = [
        { value: "WhisperAPI", label: "Whisper" },
        { value: "AmazonTranscribe", label: "Amazon Transcribe" }
    ];

    return (
        <FormField 
            className="form-field"
            label="文字起こし"
            description="">
            <RadioGroup
                onChange={({ detail }) => setTranscription(detail.value)}
                value={transcription}
                items={items}
            />
        </FormField>
    );
};

export default RadioTranscription;
