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
        <View style={{flexDirection: 'column', gap: 25}}>
          <View style={{backgroundColor: 'orange', paddingHorizontal: 10}}>
            <Image
              style={{height: 100, width: 220, resizeMode: 'contain'}}
              source={require('../assets/images/Laundrylogo.webp')}
            />
          </View>
          <View
            style={{flexDirection: 'column', alignItems: 'center', gap: 20}}>
            <View>
              <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
                Account
              </Text>
            </View>
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
                }}
                onPress={() => navigation.navigate('personal_info')}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Personal Info
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(52, 52, 52, 0.8)',
                  padding: 15,
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 15,
                }}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Order HIstory
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(52, 52, 52, 0.8)',
                  padding: 15,
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 15,
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Faq</Text>
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
                onPress={() => navigation.navigate('faq')}>
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
