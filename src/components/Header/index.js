import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Item, Input, Text } from 'native-base';

const AppHeader = props => (
  <Container>
    <Header searchBar rounded style={{backgroundColor: '#EB9532'}}>
        <Item>
            <Icon name="search" />
            <Input placeholder="Cari aja yang bisa kamu bantu.." />
            <Icon active name="glasses" />
        </Item>
        <Button transparent>
            <Text>Cari</Text>
        </Button>
    </Header>
</Container>
);

export default AppHeader;
