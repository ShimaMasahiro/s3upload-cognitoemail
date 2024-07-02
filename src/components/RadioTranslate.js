// Program Name: RadioTranslate.js
// Author: SHIMA Masahiro
// Creation Date: 2024-06-28
// Last Modified Date: 2024-06-28

import React from 'react';
import { FormField } from "@cloudscape-design/components";
import RadioGroup from "@cloudscape-design/components/radio-group";

const RadioTranslate = ({ translate, setTranslate, showNoneOption = true }) => {
    const items = [
        showNoneOption && { value: "", label: "しない" },
        { value: "AmazonTranslate", label: "AmazonTranslate" },
        { value: "GPT", label: "GPT" },
        { value: "Claude", label: "Claude" },
        { value: "Gemini", label: "Gemini" }
    ].filter(Boolean);

    return (
        <FormField 
            className="form-field"
            label="翻訳"
            description="">
            <RadioGroup
                onChange={({ detail }) => setTranslate(detail.value)}
                value={translate}
                items={items}
            />
        </FormField>
    );
};

export default RadioTranslate;
