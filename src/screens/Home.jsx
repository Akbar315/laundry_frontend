import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Servicedetails from './Servicedetails';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{backgroundColor: 'orange', paddingHorizontal: 70}}>
          <Image
            style={{height: 100, width: 220, resizeMode: 'contain'}}
            source={require('../assets/images/Laundrylogo.webp')}
          />
        </View>

        {/* <Text>Home</Text>
        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => navigation.navigate('account')}>
          <Text>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => navigation.navigate('carts')}>
          <Text>Service</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => navigation.navigate('faq')}>
          <Text>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => navigation.navigate('servicedetails')}>
          <Text>Service details</Text>
        </TouchableOpacity> */}
        <Servicedetails />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 65,
            backgroundColor: 'black',
            borderTopWidth: 1,
            borderTopColor: '#333',
            paddingHorizontal: 10,
            position: 'relative', // Needed for absolute positioning of '+'
          }}>
          {/* Central Add Button - positioned absolutely */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: '#1F1F1F',
              width: 60,
              height: 60,
              borderRadius: 30,
              bottom: 35, // Adjust to stick out
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
              zIndex: 10,
            }}
            onPress={() => navigation.navigate('carts')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 30,
                fontWeight: 'bold',
                lineHeight: 32, // Center '+'
              }}>
              +
            </Text>
          </TouchableOpacity>

          {/* Nav Items */}
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
            onPress={() => navigation.navigate('home')}>
            <Text style={{fontSize: 10, color: '#AAAAAA'}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
            onPress={() => navigation.navigate('price')} >
            <Text style={{fontSize: 10, color: '#AAAAAA'}}>Price List</Text>
          </TouchableOpacity>

          <View style={{width: 60}} />

          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
            onPress={() => navigation.navigate('order')}>
            {/* Active Order Tab */}
            <Text style={{fontSize: 10, color: '#AAAAAA'}}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
            onPress={() => navigation.navigate('account')}>
            <Text style={{fontSize: 10, color: '#AAAAAA'}}>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
