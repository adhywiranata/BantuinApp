import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AppHeader from '../components/Header';

const styles = StyleSheet.create({
  homeScene: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  header: {
    backgroundColor: '#EB9532',
  },
  content: {
    backgroundColor: '#FFFFFF',
    height: '90%',
  }
});

const HomeScene = props => (
  <View style={styles.homeScene}>
    <AppHeader navigator={props.navigator} />
    <View style={styles.content}>
      <Text>asd</Text>
    </View>
  </View>
);

export default HomeScene;
