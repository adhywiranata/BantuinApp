import React from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const AppFooter = () => (
    <Footer style={{backgroundColor: '#EB9532', position:'absolute', bottom: 0}}>
        <FooterTab style={{backgroundColor: '#EB9532'}} >
            <Button>
                <Icon name="apps" style={{color: '#FFFFFF'}}/>
                <Text style={{color: '#FFFFFF'}}>Apps</Text>
            </Button>
            <Button>
                <Icon name="camera" style={{color: '#FFFFFF'}} />
                <Text style={{color: '#FFFFFF'}}>Camera</Text>
            </Button>
            <Button>
                <Icon active name="navigate" style={{color: '#FFFFFF'}} />
                <Text style={{color: '#FFFFFF'}}>Navigate</Text>
            </Button>
            <Button>
                <Icon name="person" style={{color: '#FFFFFF'}} />
                <Text style={{color: '#FFFFFF'}}>Contact</Text>
            </Button>
        </FooterTab>
    </Footer>
);

export default AppFooter;
