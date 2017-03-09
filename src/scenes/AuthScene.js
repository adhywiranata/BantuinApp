import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from 'native-base'

const styles = StyleSheet.create({
  homeScene: {
    backgroundColor: '#EB9532',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 71,
  },
  taglineText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: -5,
    marginBottom: 20,
  },
  button: {
    width: '65%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    width: '65%'
  },
});

const AuthScene = props => (
  <View style={styles.homeScene}>
    <Text style={styles.logoText}>Bantu.in</Text>
    <Text style={styles.taglineText}>Bantu Karya Siapa Aja, Dimana Aja</Text>
    <View style={styles.buttonGroup} >
      <Button light block
        onPress={() => props.navigator.push({
          name: 'home'
        })}
      >
        <Text>Login</Text>
      </Button>
      <Button light block style={{marginTop: 10}}>
        <Text>Register</Text>
      </Button>
    </View>
  </View>
);

export default AuthScene;
