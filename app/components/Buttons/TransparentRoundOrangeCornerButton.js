import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator
} from 'react-native';

export default class TransparentRoundOrangeCornerButton extends Component {
  render(){
    return(
      <View>
        <TouchableOpacity style={styles.button} undelayColor={'transparent'} onPress={this.props.onPress}>
          {(this.props.loading) ? (<ActivityIndicator color={"white"}/>) : (<Text style={styles.buttonText}>
            {this.props.text} 
          </Text>) }
        </TouchableOpacity>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 39,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1.2,
    borderColor: '#fff',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'roboto-regular',
  },
});

