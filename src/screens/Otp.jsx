import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {getAuthToken, useMutation} from '../../apiservice';

const Otp = ({navigation, route}) => {
  const [otp, setotp] = useState('');
  const [activate, setactivate] = useState(false);
  const [isSelect, setisSelect] = useState(false);
  const [receivedOtp, setReceivedOtp] = useState('');
  const {fetchData, loading: uploading, data} = useMutation();

  // const[recievedtoken ,setrecievedtoken] = useState('');

  console.log('otp recieved', receivedOtp);

  const {phonenumber, otp: receivedOTP} = route.params;

  useEffect(() => {
    if (!receivedOtp) {
      setReceivedOtp(receivedOTP);
      Toast.show({
        type: 'success',
        text1: 'Response OTP: ' + receivedOtp,
      });
    }
  }, [receivedOtp, receivedOTP]);

  const verify = async () => {
    console.log('server:', phonenumber);
    console.log('server2', receivedOtp);
    try {
      const otpdata = {
        ph_no: phonenumber,
        otp: receivedOtp,
      };
      const response = await fetchData({
        endpoint: 'auth/verify-otp',
        method: 'POST',
        data: otpdata,
      });

      // const response = await axios.post(
      //   `${API_URL}users/verify-otp`,
      //   {
      //     phoneNumber: phonenumber,
      //     otp: receivedOtp,
      //     // role: 'user',
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      // // setrecievedtoken(response.data.authToken);
      // console.log(response.data);
      // tokenauth(response.data.authToken);
       navigation.navigate('home')
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to verify');
    }
  };

  //
  const handleSubmit = async () => {
    try {
      const logindata = {
        ph_no: phonenumber,
      };

      const response = await fetchData({
        endpoint: 'auth/login',
        method: 'POST',
        data: logindata,
      });
      console.log(response.otp);
      setReceivedOtp(response.otp);

      // navigation.navigate('UserOtp', {
      //   phone: phone,
      //   otp: response.data.otp,
      // });
      // navigation.navigate('otp', {phonenumber: phone, otp: response.data.otp});
      // Alert.alert('Success', 'Data posted successfully');
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to resend otp');
    }
  };

  useEffect(() => {
    if (otp !== '') {
      setactivate(false);
    } else {
      setactivate(true);
    }
  }, [otp]);

  //Token

  // const tokenauth = async recievedtoken => {
  //   const token = recievedtoken;

  //   console.log('reached here---------------------------', token);

  //   await Keychain.setGenericPassword('keyToken', token);

  //   try {
  //   console.log('reached here-------------2--------------');
  //   const credentials = await Keychain.getGenericPassword();
  //   console.log('reached here-------------3--------------', credentials);
  //   if (credentials) {
  //     console.log('succesfully retrieved' + credentials.password);
  //     navigation.navigate('home');
  //   } else {
  //     console.log('no credential is stored');
  //   }
  //   } catch (error) {
  //     console.error('failed ', error);
  //   }

  //   // await Keychain.resetGenericPassword();
  // };

  const Timer = () => {
    const [seconds, setSeconds] = useState(30); // Start at 30 seconds
    const [start, setStart] = useState(true); // Start as true to begin timer automatically

    // Effect to start timer when component mounts
    useEffect(() => {
      let timer;
      if (start && seconds > 0) {
        timer = setInterval(() => {
          setSeconds(prev => prev - 1);
        }, 1000);
      } else if (seconds === 0) {
        setStart(false); // Enable buttons when timer hits 0
      }
      return () => clearInterval(timer);
    }, [seconds, start]);

    const handleResendOTP = () => {
      if (!start) {
        setSeconds(30); // Reset to 30 seconds
        setStart(true); // Restart the timer
        // Add your OTP resend logic here
        handleSubmit();
        console.log('Resending OTP...');
      }
    };

    const handleWhatsAppOTP = () => {
      if (!start) {
        setSeconds(30); // Reset to 30 seconds
        setStart(true); // Restart the timer
        // Add your WhatsApp OTP logic here
        handleSubmit();
        console.log('Sending OTP via WhatsApp...');
      }
    };

    return (
      <View style={{gap: 12}}>
        {/* <Toast /> */}
        <View style={{flexDirection: 'row', gap: 3, justifyContent: 'center'}}>
          <TouchableOpacity onPress={handleResendOTP} disabled={start}>
            <Text
              style={{
                color: start ? 'grey' : 'white',
                opacity: start ? 0.5 : 1,
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'white'}}>|</Text>
          <Text style={{color: 'white'}}>
            {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 3,
            justifyContent: 'center',
            opacity: start ? 0.5 : 1,
          }}
          disabled={start}
          onPress={handleWhatsAppOTP}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'green',
            }}
          />
          <Text
            style={{
              color: start ? 'grey' : 'white',
            }}>
            Receive OTP via WhatsApp
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <Toast />
        <View style={{height: '100%', backgroundColor: 'black'}}>
          <View
            style={{
              backgroundColor: 'orange',
              height: '16%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '70%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 26,
                  width: '46%',
                  textAlign: 'center',
                }}>
                Hey there,verify your number
              </Text>
            </View>
          </View>
          <View style={{marginTop: 90, display: 'flex', alignItems: 'center'}}>
            <View
              style={{
                width: '90%',
                padding: 8,
                display: 'flex',
                gap: 30,
              }}>
              <View style={{display: 'flex', gap: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 3,
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 27}}>+91</Text>
                  <Text style={{color: 'white', fontSize: 27}}>
                    {phonenumber}
                  </Text>
                </View>
                <Text
                  style={{color: 'blue', fontSize: 18, textAlign: 'center'}}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  EDIT MOBILE NUMBER
                </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  We have sent a 5-didgit OTP to your mobile number
                </Text>
              </View>
              <View style={{display: 'flex', gap: 12}}>
                <TextInput
                  placeholder="Enter OTP"
                  placeholderTextColor={'white'}
                  keyboardType="phone-pad"
                  value={receivedOtp}
                  onChangeText={text => {
                    const value = text.replace(/[^0-9]/g, '');
                    if (value.length <= 5) {
                      setotp(value);
                    }
                  }}
                  maxLength={5}
                  style={{
                    fontSize: 19,
                    fontWeight: '900',
                    backgroundColor: 'rgba(52, 52, 52, 0.7)',
                    textAlign: 'center',
                    padding: 16,
                    borderRadius: 10,
                    color: 'white',
                    borderWidth: isSelect ? 6 : 2,
                    borderColor: 'blue',
                  }}
                  onFocus={() => setisSelect(true)}
                  onBlur={() => setisSelect(false)}></TextInput>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 3,
                    justifyContent: 'center',
                  }}>
                  <Timer />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: activate ? 'blue' : 'grey',
                  marginTop: 50,
                  padding: 8,
                  borderRadius: 10,
                }}
                disabled={!activate}
                onPress={() => {
                  verify();
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 18,
                  }}>
                  VERIFY & CONTINUE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Otp;
