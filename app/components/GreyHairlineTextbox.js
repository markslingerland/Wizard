import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class GreyHairlineTextbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput onSubmitEditing={this.props.onSubmitEditing} keyboardType={this.props.keyboardType} secureTextEntry={this.props.secureTextEntry} underlineColorAndroid="rgba(0,0,0,0)" style={styles.input} placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} placeholderTextColor="#dcdcdc" />
          <View style={styles.hairline} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  wrapper: {
    width: 300,
  },
  input: {
    padding: 20,
    height: 65,
    backgroundColor: 'transparent',

    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  hairline: {
    height: 1,
    backgroundColor: '#acacac',
    marginLeft: 20,
    marginRight: 20,
    marginTop: -20,
  },
});
