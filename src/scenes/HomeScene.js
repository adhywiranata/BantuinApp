import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AppHeader from '../components/Header';
//import AppFooter from '../components/AppFooter';
import { Campaigns } from '../routes';

const styles = StyleSheet.create({
  homeScene: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
  },
  header: {
    backgroundColor: '#EB9532',
  },
});

const HomeScene = props => (
  <View style={styles.homeScene}>
    <AppHeader navigator={props.navigator} />
    <View style={{height: '100%', paddingTop: 55}}>
      <Campaigns navigator={props.navigator} />
    </View>
  </View>
);

export default HomeScene;
