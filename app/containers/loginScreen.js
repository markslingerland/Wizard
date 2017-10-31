
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import OrangeRoundCornerButton from '../components/Buttons/OrangeRoundCornerButton';

const logo = require('../assets/images/logo.png');

const loginScreen = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#f25c24" barStyle="light-content" />
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
    <Text style={styles.welcome}>
      Welkom bij Degree-n
    </Text>
    <OrangeRoundCornerButton onPress={() => this.props.navigation.navigate('HomeScreen')} text={'Account aanmaken'} />
  </View>
);

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexGrow: 0.2,
    alignItems: 'center',
  },
  logo: {
    width: 290,
    height: 290,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('loginScreen', () => loginScreen);
