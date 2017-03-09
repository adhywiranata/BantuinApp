import React from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const AppFooter = () => (
  <Container>
    <Content />
      <Footer >
        <FooterTab>
          <Button>
            <Badge><Text>2</Text></Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button>
              <Icon name="camera" />
              <Text>Camera</Text>
          </Button>
          <Button active>
            <Badge style={{ backgroundColor: 'blue' }}><Text>51</Text></Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default AppFooter;
