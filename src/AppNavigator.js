import React, { Component } from 'react';
import {
  Navigator,
  View,
  Text,
} from 'react-native';

import { HomeScene, AuthScene } from './scenes';

const styles = {
  container: {
    width: '100%',
    height: '100%',
  }
}

class AppNavigator extends Component {

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch(route.name) {
      case 'login': return <AuthScene navigator={navigator} />
      case 'home': return <HomeScene navigator={navigator} />
      default: return <HomeScene navigator={navigator} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'login'}}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

export default AppNavigator;
