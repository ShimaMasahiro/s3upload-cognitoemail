// Program Name: ErrorAlert.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-28
// Last Modified Date: 2024-03-28

import React from 'react';
import { Alert } from "@cloudscape-design/components";

const ErrorAlert = ({ errors, onDismiss }) => {
    // errorsオブジェクトから真の値（エラーメッセージ）を持つエントリのみを抽出
    const activeErrors = Object.entries(errors).filter(([key, value]) => value);
    
    // アクティブなエラーがない場合、何も表示しない
    if (activeErrors.length === 0) return null;

    // エラーメッセージのリストを生成
    const errorMessages = activeErrors.map(([key, value]) => (
        <li key={key}>{value}</li>
    ));

    return (
        <Alert
            type="error"
            header="エラー"
            onDismiss={onDismiss}
            dismissible
        >
            <ul>{errorMessages}</ul>
        </Alert>
    );
};

export default ErrorAlert;