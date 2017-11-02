import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar, AsyncStorage, Keyboard } from 'react-native';


export default class qrScanner {

    render(){
        return(
            <View style={styles.container}>            
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    place: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      marginTop: 20,
      color: '#000'
    },
    textDesign: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      marginTop: 80,
      color: '#000',
    },
    linearGradient: {
      flex: 1,
    },
  
  });