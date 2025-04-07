import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
const Register = ({navigation}) => {
  const [isFocused, setisFocused] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [active, setactive] = useState(false);
  // console.log("name:",name);
  // console.log("number",number);

  useEffect(() => {
    if (name !== '' && number !== '' && toggleCheckBox) {
      setactive(true);
    } else {
      setactive(false);
    }
  }, [name, number, toggleCheckBox]);
  console.log("fgdgfdgdg")

  const handelSubmit = async ()=>{
    console.log("name2:",name);
    console.log("number2:",number);
  
    try{
      const response = await axios.post(
        `${API_URL}users/register`,
        {
          phoneNumber:number,
          name:name,

        },
        {
          headers:{
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);
      navigation.navigate('otp',{phonenumber:number , otp:response.data.otp});
    }catch (error){
      console.error('Error:' , error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: 'black'}}>
          <View
            style={{
              backgroundColor: 'orange',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 50,
            }}>
            <Text style={{color: 'blue', fontSize: 30}}>
              Laundry piling up?
            </Text>
            <Text style={{color: 'blue', fontSize: 30}}>Let's start!</Text>
          </View>
          <View style={{height: '100%', alignItems: 'center'}}>
            <View
              style={{width: '80%', display: 'flex', gap: 20, marginTop: 18}}>
              <View style={{display: 'flex', gap: 15}}>
                <Text style={{color: 'white', fontSize: 18}}>
                  Already got an account?Smart!
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'blue',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 8,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text style={{color: 'white', fontSize: 23, padding: 6}}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{color: 'white', fontSize: 18}}>
                  New to LaaundryMate?Signup now!
                </Text>
              </View>
              <View style={{display: 'flex', gap: 20}}>
                <View>
                  <TextInput
                    value={name}
                    onChangeText={text => {
                      const value = text.replace(/[^a-zA-Z]/g, '');
                      if (value.length <= 10) {
                        setname(value);
                      }
                    }}
                    maxLength={10}
                    placeholder="Enter Name"
                    placeholderTextColor={'white'}
                    style={{
                      color: 'white',
                      backgroundColor: 'rgba(52, 52, 52, 1)',
                      borderColor: 'blue',
                      borderWidth: isFocused === 'Name' ? 6 : 2,
                      borderRadius: 10,
                      padding: 15,
                      fontSize: 19,
                      fontWeight: 900,
                    }}
                    onFocus={() => setisFocused('Name')} // Set focus state to true
                    onBlur={() => setisFocused('')}></TextInput>
                </View>
                <View style={{display: 'flex', gap: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 30,
                      borderColor: 'blue',
                      borderWidth: isFocused === 'Number' ? 6 : 2,
                      alignItems: 'center',
                      padding: 5,
                      borderRadius: 10,
                      backgroundColor: 'rgba(52, 52, 52, 1)',
                    }}>
                    <Text style={{color: 'white', fontSize: 19}}>+91</Text>
                    <TextInput
                      value={number}
                      onChangeText={text => {
                        const value = text.replace(/[^0-9]/g, '');
                        if (value.length <= 10) {
                          setnumber(value);
                        }
                      }}
                      maxLength={10 }
                      placeholder="Enter Phone"
                      placeholderTextColor={'white'}
                      keyboardType="phone-pad"
                      style={{
                        color: 'white',
                        fontWeight: 900,
                        fontSize: 19,
                      }}
                      onFocus={() => setisFocused('Number')}
                      onBlur={() => setisFocused('')}></TextInput>
                  </View>
                  <View style={{}}>
                    <Text
                      style={{color: 'white', fontSize: 11.7, paddingLeft: 22}}>
                      An OTP will be sent to this number for verification.
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginBottom: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => setToggleCheckBox(!toggleCheckBox)}
                    style={{
                      borderRadius: 5,
                      borderColor: 'grey',
                      borderWidth: 2,
                      height: 22,
                      width: 22,
                      backgroundColor: toggleCheckBox ? 'black' : 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {toggleCheckBox && <Text style={{color: 'white'}}>✓</Text>}
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{color: 'white'}}>
                    By continuining,I agree to the
                    <Text
                      style={{color: 'blue'}}
                      onPress={() =>
                        Linking.openURL(
                          'https://www.youtube.com/watch?v=my2xOYCJdJs&t=2324s&ab_channel=SujanAnand',
                        )
                      }>
                      Terms and Conditions
                    </Text>
                    <Text>and</Text>
                    <Text
                      style={{color: 'blue'}}
                      onPress={() =>
                        Linking.openURL(
                          'https://www.youtube.com/watch?v=my2xOYCJdJs&t=2324s&ab_channel=SujanAnand',
                        )
                      }>
                      privacyPolicy
                    </Text>
                    <Text>of LaundryMate</Text>
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 8,
                  borderRadius: 10,
                  backgroundColor: active ? 'blue' : 'grey',
                }}
                disabled={!active}
                onPress={() => {
                  // Alert.alert('otp have sent');
                  handelSubmit();
                  navigation.navigate('otp',{phonenumber:number});
                }}>
                <Text style={{color: 'white', fontSize: 23, padding: 6}}>
                  Get OTP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const Styles = StyleSheet.create({
  heading: {},
});
export default Register;
