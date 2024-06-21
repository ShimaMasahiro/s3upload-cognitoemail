// Program Name:InputText.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-27
// Last Modified Date: 2024-04-06

import * as React from "react";
import { FormField, Textarea } from "@cloudscape-design/components";

const InputText = () => {
    const [value, setValue] = React.useState("");
    return (
        <FormField
            className="form-field"
            label="プロンプト"
            description="プロンプトを入力してください。"
        >
        <Textarea
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            ariaRequired
            controlId="inputText"
            disableBrowserAutocorrect
            id="inputText"
            name="inputText"
            rows={5}
            spellcheck
        />
        </FormField>
    );
}

export default InputText;