// Program Name: SelectCaption.js
// Author: SHIMA Masahiro
// Creation Date: 2024-05-30

import React from 'react';
import { FormField, SpaceBetween } from "@cloudscape-design/components";

const SelectCaption = ({ caption, setCaption, showNoneOption = true }) => (
    <FormField 
        className="form-field"
        label="字幕データ"
        description="字幕データを生成するサービスを選択してください。">
        <SpaceBetween direction="horizontal" size="xxl">
            {showNoneOption && (
                <div className="radio-button">
                    <input type="radio" value="" name="caption"
                        onChange={() => setCaption('')} 
                        checked={caption === ''} 
                    /> しない
                </div>
            )}
            <div className="radio-button">
                <input type="radio" value="GPT" name="caption"
                    onChange={() => setCaption('GPT')} 
                    checked={caption === 'GPT'} 
                /> AmazonTranscribe + GPT-4o
            </div>
            <div className="radio-button">
                <input type="radio" value="Claude" name="caption"
                    onChange={() => setCaption('Claude')} 
                    checked={caption === 'Claude'} 
                /> AmazonTranscribe + Claude3 Opus
            </div>
        </SpaceBetween>
    </FormField>
);

export default SelectCaption;
