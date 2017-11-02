import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar, AsyncStorage, Keyboard } from 'react-native';
import TransparentRoundOrangeCornerButton from '../components/Buttons/TransparentRoundOrangeCornerButton';
import GreyHairlineTextbox from '../components/GreyHairlineTextbox';
import LinearGradient from 'react-native-linear-gradient';

class registerScreen extends Component {
  constructor(props){
    super(props)
    
  }

  state = {
    fullName: null,
    email: null,
    password: null,
    passwordRepeat: null,
    loading: false
  }

  register() {
    if(this.state.email && this.state.fullName && this.state.password && this.state.passwordRepeat !== null){
      if(this.state.password == this.state.passwordRepeat){

      } else {
        alert('De wachtwoorden zijn niet gelijk aan elkaar')
      }
    } else {
      alert('NIET ALLE velden zijn INGEVULD!!!!!!')
    }

  }

  static navigationOptions = {
    header: null
  };

  render(){
    return(
      <LinearGradient colors={['#f25c24','#f36b38','#f58156']} style={styles.container}>
        <StatusBar backgroundColor="#f25c24" barStyle="light-content" />
        <View style={styles.place}>
          <Text style={styles.textDesign}>
          Maak een account aan
          </Text>
          <GreyHairlineTextbox placeholder={'volledige naam'} onChangeText={(text) => this.setState({fullName: text})} />
          <GreyHairlineTextbox placeholder={'e-mailadres'} keyboardType={'email-address'} onChangeText={(text) => this.setState({email: text})} />
          <GreyHairlineTextbox placeholder={'wachtwoord'} secureTextEntry={true} onChangeText={(text) => this.setState({password: text})} />
          <GreyHairlineTextbox placeholder={'wachtwoord herhalen'} secureTextEntry={true} onChangeText={(text) => this.setState({passwordRepeat: text})} />
          <View style={{ marginTop: 40 }} >
            <TransparentRoundOrangeCornerButton text={'Account aanmaken'} onPress={() => this.register()} loading={this.state.loading} />
          </View>
          <View>
            <Text style={styles.text}>
              Of heeft u al een account?
            </Text>
            <TransparentRoundOrangeCornerButton text={'Login'} loading={this.state.loading} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default registerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 2,
    color: '#fff',
    textAlign: 'center',
  },
  textDesign: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginTop: 80,
    color: '#fff',
  },

});

AppRegistry.registerComponent('registerScreen', () => registerScreen);
