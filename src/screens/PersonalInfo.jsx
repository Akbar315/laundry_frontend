import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const PersonalInfo = ({navigation, route}) => {
  // const {Uname, Uphone, Uemail, Ugender} = route.params;
const [Updateddata,setUpdatedata]=useState({
  username: route.params?.Uname || '',
  phone: route.params?.Uphone || '',
  email: route.params?.Uemail || '',
  gender: route.params?.Ugender || '',
});
  // console.log('the data------------->', Uname);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: 'orange', paddingHorizontal: 10}}>
          <Image
            style={{height: 100, width: 220, resizeMode: 'contain'}}
            source={require('../assets/images/Laundrylogo.webp')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity style={{backgroundColor:"white"}} onPress={()=>navigation.goBack('account')}>
              <Text>go back </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textAlign: 'center',
                margin: 10,
              }}>
              Personal Info
            </Text>
          </View>
          <View style={{width: '90%', flexDirection: 'column', gap: 20}}>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>User Name </Text>
              <Text
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}>
                {Updateddata.username}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>
                Phone Number{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}>
                {Updateddata.phone}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>Email Id </Text>
              <Text
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}>
                {Updateddata.email}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>Gender </Text>
              <Text
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}>
                {Updateddata.gender}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 15,
                borderRadius: 11,
                marginTop: 20,
              }}
              onPress={() => navigation.navigate('Editpersonalinfo')}>
              <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                Edit Personal Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'red', padding: 15, borderRadius: 11}}>
              <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                Deactivate Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;
