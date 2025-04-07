import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Confirmation = () => {
  const navigation = useNavigation();
  const handlePass = () => {
    // navigation.navigate('home');
    console.log('just clicked .................');
    navigation.navigate('order');
  };

//   import { useNavigation } from '@react-navigation/native';

// const MyScreen = () => {
//   const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}>
      {/* <Text style={{fontSize:30,color:"white",textAlign:"center"}}>Confirmation</Text> */}
      <View
        style={{
          padding: 20,
          height: '80%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: 15,
          borderColor: 'blue',
          borderWidth: 2,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: 500,
            textAlign: 'center',
          }}>
          Congragulations! Your Order has been successfully confirmed{' '}
        </Text>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
          Thank you for choosing Laundry Mate as your Laundry Partner.
        </Text>
        {/* <Text style={{color:"white"}} >Thank You</Text> */}
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            backgroundColor: 'blue',
            width: 130,
            padding: 8,
            borderRadius: 10,
          }}
          onPress={() => {
            handlePass();
          }}>
          View Order
        </Text>
      </View>
    </View>
  );
};

export default Confirmation;
