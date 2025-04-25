import React from 'react';
// import Login from './src/screens/Login'
// import Splash from './src/screens/Splash'
// import Otp from './src/screens/Otp'
// import Register from './src/screens/Register'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Account from './src/screens/Account';
import PersonalInfo from './src/screens/PersonalInfo';
import Editpersonalinfo from './src/screens/Editpersonalinfo';
import CartScreen from './src/screens/orderdummy';
import Cart from './src/screens/Cart';
import LaundryAppUI from './src/screens/datedemo';
import Orderhistory from './src/screens/Orderhistory';
import Faq from './src/screens/Faq';
import Servicedetails from './src/screens/Servicedetails';
import Drycleaning from './src/screens/Drycleaning';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Otp from './src/screens/Otp';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('hi');

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='splash'>
        <Stack.Screen component={Splash} name='splash'/>
        <Stack.Screen component={Login} name='Login'/>
        <Stack.Screen component={Register} name='Register'/>
        <Stack.Screen component={Otp} name='otp'/>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen component={Account} name="account" />
        <Stack.Screen component={PersonalInfo} name="personal_info" />
        <Stack.Screen component={Editpersonalinfo} name="Editpersonalinfo" />
        <Stack.Screen component={CartScreen} name="cart" />
        <Stack.Screen component={Cart} name="carts" />
        <Stack.Screen component={LaundryAppUI} name="date" />
        <Stack.Screen component={Orderhistory} name="order" />
        <Stack.Screen component={Faq} name="faq" />
        <Stack.Screen component={Servicedetails} name="servicedetails" />
        <Stack.Screen component={Drycleaning} name='drycleaning'/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
