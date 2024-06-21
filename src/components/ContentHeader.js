// Program Name: ContentHeader.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-27
// Last Modified Date: 2024-02-27

import React from 'react';
import { SpaceBetween, Header } from '@cloudscape-design/components';

const ContentHeader = ({ title }) => {
    return (
        <SpaceBetween direction="horizontal" size="xs">
            <Header variant="h1">{title}</Header>
        </SpaceBetween>
    );
};

export default ContentHeader;