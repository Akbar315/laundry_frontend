import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Servicedetails = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{backgroundColor: 'black', padding: 20}}>
        <Text
          style={{
            // textAlign: 'center',
            color: 'white',
            fontSize: 30,
            fontWeight: 500,
          }}>
          Our Services
        </Text>
      </View>
      <ScrollView style={{padding: 15, flex: 1}}>
        <View style={{flexDirection: 'column', gap: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 5,
              borderRadius: 8,
              padding: 15,
              shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Dry cleaning</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }} onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Premium laundry</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Laundry</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>steam Press</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Shoe Cleaning</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Bag Cleaning</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Carpet Cleaning</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}onPress={() => navigation.navigate('drycleaning')}>
            <Text style={{color: 'white', fontSize: 20}}>Curtain Cleaning</Text>
            <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
          </TouchableOpacity>
          <Text>gffgf</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Servicedetails;
