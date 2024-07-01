// Program Name: /components/ToolsHelpPanel.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-06-27
// Last Modified Date: 2024-06-28

import React from 'react';
import { HelpPanel, header } from "@cloudscape-design/components";

const ToolsHelpPanel = () => {
    return (
        <HelpPanel header={<h2>Overview</h2>}
        >
            Help content
        </HelpPanel>
    );
};

export default ToolsHelpPanel;