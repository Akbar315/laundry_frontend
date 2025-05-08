import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {removeAuthToken} from '../../apiservice';

const Account = ({navigation}) => {
  const handellogout = () => {
    removeAuthToken();
    navigation.navigate('splash');
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'column', gap: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between',
              // paddingVertical: 15,
              // paddingHorizontal: 15,
              padding: 18,
              backgroundColor: 'orange',
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 35,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                {'‹'}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                width: '90%',
              }}>
              Account
            </Text>
            {/* <View style={{width: 30}} /> */}
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
              marginTop: 30,
            }}>
            {/* <View>
              <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
                Account
              </Text>
            </View> */}
            <View
              style={{
                width: '90%',
                paddingHorizontal: 10,
                flexDirection: 'column',
                gap: 40,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(52, 52, 52, 0.8)',
                  padding: 15,
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => navigation.navigate('personal_info')}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Personal Info
                </Text>
                <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(52, 52, 52, 0.8)',
                  padding: 15,
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }} onPress={() => navigation.navigate('order')}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Order HIstory
                </Text>
                <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(52, 52, 52, 0.8)',
                  padding: 15,
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}onPress={() => navigation.navigate('faq')}>
                <Text style={{color: 'white', fontSize: 20}}>Faq</Text>
                <Text style={{color: 'white', fontSize: 20}}> {'>'} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  padding: 15,
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 15,
                  marginTop: 20,
                }}
                >
                <Text
                  style={{fontSize: 23, color: 'white', textAlign: 'center'}}
                  onPress={() => handellogout()}>
                  LogOut
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
