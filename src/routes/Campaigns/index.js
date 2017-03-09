import React from 'react';
import { Container, Content } from 'native-base';

import Campaign from './Campaign';

const data = [
  {
    id: 1,
    title: 'Batik Tenun Pekalongan Project',
    photo: 'http://202.79.216.181/Images/Landing/Publish/Landing-2635990926417432673.jpg',
    user: 'Tenun Foundation',
    description: 'Batik adalah kerajinan budaya dari daerah Jawa yang dilestarikan hingga sekarang. bantu Tenun Foundation untuk sebuah project bernama Batik Tenun Pekalongan untuk membuat 1000 kain batik tradisional!',
    target: 50000000,
    obtained: 30000000,
  },
  {
    id: 3,
    title: 'Batik Tenun Pekalongan Project',
    photo: 'http://202.79.216.181/Images/Landing/Publish/Landing-2635990926417432673.jpg',
    user: 'Tenun Foundation',
    description: 'Lorem Ipsum Dolor Sit Amet',
    target: 50000000,
    obtained: 30000000,
  },
  {
    id: 2,
    title: 'Batik Tenun Pekalongan Project',
    photo: 'http://202.79.216.181/Images/Landing/Publish/Landing-2635990926417432673.jpg',
    user: 'Tenun Foundation',
    description: 'Lorem Ipsum Dolor Sit Amet',
    target: 50000000,
    obtained: 30000000,
  },
];

const Campaigns = () => (
  <Container>
    <Content style={{padding: 10}}>
      { data.map(campaign => <Campaign key={campaign.id} {...campaign} />)}
    </Content>
  </Container>
);

export default Campaigns;
