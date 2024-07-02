// Program Name: RadioCaption.js
// Author: SHIMA Masahiro
// Creation Date: 2024-06-29
// Last Modified Date: 2024-06-29

import React from 'react';
import { FormField } from "@cloudscape-design/components";
import RadioGroup from "@cloudscape-design/components/radio-group";

const RadioCaption = ({ caption, setCaption, showNoneOption = true }) => {
    const items = [
        showNoneOption && { value: "", label: "しない" },
        { value: "GPT", label: "AmazonTranscribe + GPT" },
        { value: "Claude", label: "AmazonTranscribe + Claude" }
    ].filter(Boolean); // `filter(Boolean)` で undefined を取り除きます

    return (
        <FormField 
            className="form-field"
            label="字幕データ"
            description="">
            <RadioGroup
                onChange={({ detail }) => setCaption(detail.value)}
                value={caption}
                items={items}
            />
        </FormField>
    );
};

export default RadioCaption;
