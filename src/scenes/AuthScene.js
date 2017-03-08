import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

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
    marginTop: -15,
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
  }
});

const AuthScene = () => (
  <View style={styles.homeScene}>
    <Text style={styles.logoText}>Bantu.in</Text>
    <Text style={styles.taglineText}>Bantu Siapa Aja, Dimana Aja</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  </View>
);

export default AuthScene;
