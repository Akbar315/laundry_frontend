import {
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import axios from 'axios';
import {API_URL} from 'react-native-dotenv';
import React, {useEffect, useState} from 'react';
import {resolver} from '../../metro.config';
import {useMutation} from '../../apiservice';

const Login = ({navigation}) => {
  const [selected, setselected] = useState(false);
  const [phone, setphone] = useState('');
  const [Active, setActive] = useState(false);
  const {fetchData, loading: uploading, data} = useMutation();

  useEffect(() => {
    if (phone !== '') {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [phone]);

  const handleSubmit = async () => {
    if (!phone) {
      Alert.alert('Error', 'please provide phonenumber');
    }
    try {
      const logindata = {
        ph_no: phone,
      };

      const response = await fetchData({
        endpoint: 'auth/login',
        method: 'POST',
        data: logindata,
      });
      console.log('passing otp:', response.otp);
      navigation.navigate('otp', {phonenumber: phone, otp: response.otp});

      // const response = await axios.post(
      //   `${API_URL}users/login`,
      //   {
      //     phoneNumber: phone,
      //     // role:'user'
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );

      // // navigation.navigate('UserOtp', {
      // //   phone: phone,
      // //   otp: response.data.otp,
      // // });
      // console.log("passing otp:",response.data);
      // navigation.navigate('otp', {phonenumber: phone, otp: response.data.otp});
      // // Alert.alert('Success', 'Data posted successfully');
    }catch (error) {
        console.error('Upload error:', error);
        Alert.alert('Error', 'Failed to login');
      }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <View style={{backgroundColor: 'black', height: '100%'}}>
          <View
            style={{
              backgroundColor: 'orange',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20%',
            }}>
            <Text style={{fontSize: 30, color: 'blue'}}>We meet again!</Text>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 80,
            }}>
            <View style={{width: '80%', display: 'flex', gap: 44}}>
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 14.7}}>
                  Please enter your registered mobile number
                </Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 14.7}}>
                  to login via OTP
                </Text>
              </View>
              <View style={{display: 'flex', gap: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                    backgroundColor: 'rgba(52, 52, 52, 1)',
                    borderColor: 'blue',
                    borderRadius: 10,
                    borderWidth: selected ? 6 : 2,
                    paddingHorizontal: 14,
                  }}>
                  <Text style={{color: 'white', fontSize: 20}}>+91</Text>
                  <TextInput
                    style={{color: 'white', fontSize: 20, fontWeight: 900}}
                    keyboardType="phone-pad"
                    placeholder="Enter Phone"
                    placeholderTextColor={'white'}
                    onFocus={() => setselected(true)}
                    onBlur={() => setselected(false)}
                    value={phone}
                    onChangeText={text => {
                      const value = text.replace(/[^0-9]/g, '');
                      if (value.length <= 10) {
                        setphone(value);
                      }
                    }}
                    maxLength={10}></TextInput>
                </View>
                <Text style={{color: 'white', fontSize: 11.7, paddingLeft: 12}}>
                  A 6-digit OTP will be sent to this number for verification.
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    padding: 6,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: Active ? 'blue' : 'grey',
                  }}
                  disabled={!Active}
                  onPress={() => {
                    // Alert.alert('otp have send');
                    handleSubmit();
                  }}>
                  <Text style={{color: 'white', fontSize: 23}}>Get OTP</Text>
                </TouchableOpacity>
              </View>
              <View style={{display: 'flex', gap: 18, marginTop: 48}}>
                <Text style={{color: 'white', fontSize: 19, paddingLeft: 5}}>
                  Don't have account?Let's fix that!
                </Text>
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    navigation.navigate('Register');
                  }}>
                  <Text style={{color: 'white', fontSize: 18}}>SIGNUP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({});
