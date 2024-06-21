// Program Name: useEmail.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-13
// Last Modified Date: 2024-03-13

/**
 * メールアドレスの状態とその変更ハンドラーを提供する。
 * @param {string} initialValue - メールアドレスの初期値（オプショナル、デフォルトは空文字列）。
 * @return {Array} メールアドレスの状態とその変更ハンドラーを含む配列。
 * 
 * メールアドレスの入力フィールドにバインドするために使用
 * 状態として`email`を持ち、更新するための`handleEmailChange`関数を提供する。
 * 入力フィールドで発生するイベントに基づいてメールアドレスを更新できる。
 */
 
import { useState } from 'react';

export const useEmail = (initialValue = '') => {
    const [email, setEmail] = useState(initialValue);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return [email, handleEmailChange];
};