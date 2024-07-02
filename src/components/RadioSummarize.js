// Program Name: RadioSummarize.js
// Author: SHIMA Masahiro
// Creation Date: 2024-06-29
// Last Modified Date: 2024-06-29

import React from 'react';
import { FormField } from "@cloudscape-design/components";
import RadioGroup from "@cloudscape-design/components/radio-group";

const RadioSummarize = ({ summarize, setSummarize }) => {
    const items = [
        { value: "GPT", label: "GPT" },
        { value: "Claude", label: "Claude" },
        { value: "Gemini", label: "Gemini" }
    ];

    return (
        <FormField 
            className="form-field"
            label="要約"
            description="">
            <RadioGroup
                onChange={({ detail }) => setSummarize(detail.value)}
                value={summarize}
                items={items}
            />
        </FormField>
    );
};

export default RadioSummarize;
