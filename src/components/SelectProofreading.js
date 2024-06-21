// Program Name: SelectProofreading.js
// Author: SHIMA Masahiro
// Creation Date: 2024-03-06
// Last Modified Date: 2024-06-14

import React from 'react';
import { FormField, SpaceBetween } from "@cloudscape-design/components";

const SelectProofreading = ({ proofreading, setProofreading, showNoneOption = true }) => (
    <FormField 
        className="form-field"
        label="校正・要約" 
        description="校正・要約するサービスを選択してください。">
        <SpaceBetween direction="horizontal" size="xxl">
            {showNoneOption && (
                <div className="radio-button">
                    <input type="radio" value="" name="proofreading"
                        onChange={() => setProofreading('')} 
                        checked={proofreading === ''} 
                    /> しない
                </div>
            )}
            <div className="radio-button">
                <input type="radio" value="GPT" name="proofreading"
                    onChange={() => setProofreading('GPT')} 
                    checked={proofreading === 'GPT'} 
                /> GPT-4o
            </div>
            <div className="radio-button">
                <input type="radio" value="Claude" name="proofreading"
                    onChange={() => setProofreading('Claude')} 
                    checked={proofreading === 'Claude'} 
                /> Claude3 Opus
            </div>
            <div className="radio-button">
                <input type="radio" value="Gemini" name="proofreading"
                    onChange={() => setProofreading('Gemini')} 
                    checked={proofreading === 'Gemini'} 
                /> Gemini Pro 1.5
            </div>
        </SpaceBetween>
    </FormField>
);

export default SelectProofreading;
