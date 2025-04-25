import {View, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {getAuthToken} from '../../apiservice';
const Splash = ({navigation}) => {
  useEffect(() => {
    const verification = async () => {
      const token = await getAuthToken();
      console.log('token', token);
      if (token) {
        setTimeout(() => navigation.replace('home'), 5000);
      } else {
        setTimeout(() => navigation.replace('Register'), 5000);
      }
    };
    verification();
  });

  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          backgroundColor: 'orange',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 500, width: 250, resizeMode: 'contain'}}
          source={require('../assets/images/Laundrylogo.webp')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
