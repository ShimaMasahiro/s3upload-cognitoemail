// Program Name:InputEmail.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-20
// Last Modified Date: 2024-03-13

import React from 'react';
import { FormField } from "@cloudscape-design/components";

const InputEmail = ({ email, onChange }) => {
  return (
    <FormField
        className="form-field"
        label="メールアドレス"
        description="メールアドレスを入力してください。"
    >
      <input
        type="email"
        value={email}
        id="email"
        name="email"
        onChange={onChange}
        style={{ width: '100%' }}
        inputMode="email"
        aria-required="true"
        autoFocus
      />
    </FormField>
  );
};

export default InputEmail;