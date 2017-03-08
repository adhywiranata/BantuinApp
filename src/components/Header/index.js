import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

const AppHeader = props => (
  <Container>
    <Header style={{backgroundColor: '#EB9532'}}>
        <Left>
            <Button transparent onPress={() => {
                props.navigator.pop();
              }}>
                <Icon name='arrow-back' />
            </Button>
        </Left>
        <Body>
            <Title>Bantu.in</Title>
        </Body>
        <Right>
            <Button transparent>
                <Icon name='menu' />
            </Button>
        </Right>
    </Header>
</Container>
);

export default AppHeader;
