// Program Name: SelectTranslate.js
// Author: SHIMA Masahiro
// Creation Date: 2024-03-06
// Last Modified Date: 2024-06-14

import React from 'react';
import { FormField, SpaceBetween } from "@cloudscape-design/components";

const SelectTranslate = ({ translate, setTranslate, showNoneOption = true }) => (
    <FormField 
        className="form-field"
        label="翻訳"
        description="翻訳するサービスを選択してください。">
        <SpaceBetween direction="horizontal" size="xxl">
            {showNoneOption && (
                <div className="radio-button">
                    <input type="radio" value="" name="translate"
                        onChange={() => setTranslate('')} 
                        checked={translate === ''} 
                    /> しない
                </div>
            )}
            <div className="radio-button">
                <input type="radio" value="AmazonTranslate" name="translate"
                    onChange={() => setTranslate('AmazonTranslate')} 
                    checked={translate === 'AmazonTranslate'} 
                /> AmazonTranslate
            </div>
            <div className="radio-button">
                <input type="radio" value="GPT" name="translate"
                    onChange={() => setTranslate('GPT')} 
                    checked={translate === 'GPT'} 
                /> GPT-4o
            </div>
            <div className="radio-button">
                <input type="radio" value="Claude" name="translate"
                    onChange={() => setTranslate('Claude')} 
                    checked={translate === 'Claude'} 
                /> Claude3 Opus
            </div>
            <div className="radio-button">
                <input type="radio" value="Gemini" name="translate"
                    onChange={() => setTranslate('Gemini')} 
                    checked={translate === 'Gemini'} 
                /> Gemini 1.5 Pro
            </div>
        </SpaceBetween>
    </FormField>
);

export default SelectTranslate;
