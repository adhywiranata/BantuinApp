import React from 'react';
import { Container, Content } from 'native-base';

import Campaign from './Campaign';

const Campaigns = () => (
  <Container>
    <Content style={{padding: 10}}>
      { [1, 2, 3].map(campaign => <Campaign key={campaign} />)}
    </Content>
  </Container>
);

export default Campaigns;
