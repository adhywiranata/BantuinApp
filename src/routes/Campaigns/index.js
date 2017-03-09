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
    id: 2,
    title: 'Kerajinan Desa Magelang',
    photo: 'http://assets.kompasiana.com/statics/files/1413283808734017760.jpg?t=o&v=800',
    user: 'Djoko Answar',
    description: 'Lorem Ipsum Dolor Sit Amet',
    target: 5000000,
    obtained: 4000000,
  },
  {
    id: 3,
    title: 'Pendanaan Sekolah Seni Yogyakarta',
    photo: 'http://gambar-rumah.com/attachments/kota-lain/3738345d1445915098-pendopo-img_4020.jpg',
    user: 'Pendopo Gede Art School',
    description: 'Lorem Ipsum Dolor Sit Amet',
    target: 10000000,
    obtained: 100000,
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
