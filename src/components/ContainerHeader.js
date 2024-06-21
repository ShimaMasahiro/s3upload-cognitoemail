// Program Name: ContainerHeader.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-28
// Last Modified Date: 2024-03-28

import React from 'react';
import { Container, Header } from '@cloudscape-design/components';

const ContainerHeader = ({ headerText, children }) => {
    return (
        <Container
            header={<Header variant="h2">{headerText}</Header>}
        >
            {children}
        </Container>
    );
};

export default ContainerHeader;