import { StackNavigator } from 'react-navigation';
import RegisterScreen from './containers/registerScreen'

export const Router = StackNavigator({
  RegisterScreen: {
      screen: RegisterScreen
  }


});