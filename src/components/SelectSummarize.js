// Program Name: SelectSummarize.js
// Author: SHIMA Masahiro
// Creation Date: 2024-05-30
// Last Modified Date: 2024-06-03

import React from 'react';
import { FormField, SpaceBetween } from "@cloudscape-design/components";

const SelectSummarize = ({ summarize, setSummarize }) => (
    <div>
        <FormField 
            className="form-field"
            label="要約"
            description="要約するサービスを選択してください。">
            <SpaceBetween direction="horizontal" size="xxl">
                <div>
                    <input type="radio" value="GPT" name="summarize"
                        onChange={() => setSummarize('GPT')} 
                        checked={summarize === 'GPT'} 
                    /> GPT-4o
                </div>
                <div className="radio-button">
                    <input type="radio" value="Claude" name="summarize"
                        onChange={() => setSummarize('Claude')} 
                        checked={summarize === 'Claude'} 
                    /> Claude3 Opus
                </div>
                <div className="radio-button">
                    <input type="radio" value="Gemini" name="summarize"
                        onChange={() => setSummarize('Gemini')} 
                        checked={summarize === 'Gemini'} 
                    /> Gemini 1.5 Pro
                </div>
            </SpaceBetween>
        </FormField>
    </div>
);

export default SelectSummarize;
