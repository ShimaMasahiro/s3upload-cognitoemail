// Program Name: RadioProofreading.js
// Author: SHIMA Masahiro
// Creation Date: 2024-06-29
// Last Modified Date: 2024-06-29

import React from 'react';
import { FormField } from "@cloudscape-design/components";
import RadioGroup from "@cloudscape-design/components/radio-group";

const RadioProofreading = ({ proofreading, setProofreading, showNoneOption = true }) => {
    const items = [
        showNoneOption && { value: "", label: "しない" },
        { value: "GPT", label: "GPT" },
        { value: "Claude", label: "Claude" },
        { value: "Gemini", label: "Gemini" }
    ].filter(Boolean); 

    return (
        <FormField 
            className="form-field"
            label="校正・要約" 
            description="">
            <RadioGroup
                onChange={({ detail }) => setProofreading(detail.value)}
                value={proofreading}
                items={items}
            />
        </FormField>
    );
};

export default RadioProofreading;
