import React, { useEffect, useState } from 'react';
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
import { useMutation } from '../../apiservice';
import ModalPopup from './ModalPopup';

const Register = ({ navigation }) => {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [isFocused, setisFocused] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [active, setactive] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);

  const { fetchData, loading: uploading, data } = useMutation();

  useEffect(() => {
    if (name !== '' && number !== '' && toggleCheckBox) {
      setactive(true);
    } else {
      setactive(false);
    }
  }, [name, number, toggleCheckBox]);

  const handelSubmit = async () => {
    if (!name || !number) {
      Alert.alert('Error', 'Please provide all required fields');
      return;
    }

    try {
      const registerdata = {
        ph_no: number,
        name: name,
      };

      const response = await fetchData({
        endpoint: 'auth/register',
        method: 'POST',
        data: registerdata,
      });
      navigation.navigate('otp', { phonenumber: number, otp: response.otp });
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to register');
    }
  };

  const termsContent = `
1. Acceptance of Terms
By using LaundryMate, you agree to our terms.

2. Booking Scope
LaundryMate only handles service bookings (no delivery).

3. Responsibility
You are responsible for drop-off/pick-up and providing accurate info.

4. Changes
Terms may change. Continued use means you accept them.
  `;

  const privacyContent = `
1. Data Usage
We only use your data for booking-related purposes.

2. Security
We store your information securely and never share it without permission.

3. Your Rights
You can request data removal by contacting support.
  `;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ backgroundColor: 'orange', alignItems: 'center', padding: 50 }}>
          <Text style={{ color: 'blue', fontSize: 30 }}>Laundry piling up?</Text>
          <Text style={{ color: 'blue', fontSize: 30 }}>Let's start!</Text>
        </View>

        <View style={{ width: '85%', alignSelf: 'center', gap: 15, marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Already got an account? Smart!</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              alignItems: 'center',
              padding: 8,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: 'white', fontSize: 23, padding: 6 }}>Login</Text>
          </TouchableOpacity>

          <Text style={{ color: 'white', fontSize: 18 }}>New to LaundryMate? Signup now!</Text>

          {/* Name Input */}
          <TextInput
            value={name}
            onChangeText={text => {
              const value = text.replace(/[^a-zA-Z]/g, '');
              if (value.length <= 10) {
                setname(value);
              }
            }}
            placeholder="Enter Name"
            placeholderTextColor="white"
            maxLength={10}
            onFocus={() => setisFocused('Name')}
            onBlur={() => setisFocused('')}
            style={{
              color: 'white',
              backgroundColor: 'rgba(52, 52, 52, 1)',
              borderColor: 'blue',
              borderRadius: 10,
              padding: 15,
              fontSize: 19,
              fontWeight: '900',
              borderWidth: isFocused === 'Name' ? 6 : 2,
            }}
          />

          {/* Phone Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(52, 52, 52, 1)',
              borderColor: 'blue',
              borderRadius: 10,
              padding: 10,
              borderWidth: isFocused === 'Number' ? 6 : 2,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>+91</Text>
            <TextInput
              value={number}
              onChangeText={text => {
                const value = text.replace(/[^0-9]/g, '');
                if (value.length <= 10) {
                  setnumber(value);
                }
              }}
              maxLength={10}
              keyboardType="phone-pad"
              placeholder="Enter Phone"
              placeholderTextColor="white"
              onFocus={() => setisFocused('Number')}
              onBlur={() => setisFocused('')}
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '900',
                flex: 1,
              }}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 12, paddingLeft: 5 }}>
            An OTP will be sent to this number.
          </Text>

          {/* Terms & Privacy */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
              style={{
                height: 22,
                width: 22,
                borderRadius: 5,
                borderColor: 'grey',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {toggleCheckBox && <Text style={{ color: 'white' }}>✓</Text>}
            </TouchableOpacity>
            <Text style={{ color: 'white', flex: 1, flexWrap: 'wrap' }}>
              By continuing, I agree to the{' '}
              <Text
                style={{ color: 'blue', textDecorationLine: 'underline' }}
                onPress={() => setTermsVisible(true)}
              >
                Terms and Conditions
              </Text>{' '}
              and{' '}
              <Text
                style={{ color: 'blue', textDecorationLine: 'underline' }}
                onPress={() => setPrivacyVisible(true)}
              >
                Privacy Policy
              </Text>{' '}
              of LaundryMate
            </Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: active ? 'blue' : 'grey',
            }}
            disabled={!active}
            onPress={handelSubmit}
          >
            <Text style={{ color: 'white', fontSize: 23 }}>Get OTP</Text>
          </TouchableOpacity>
        </View>

        {/* Modals */}
        <ModalPopup
          visible={termsVisible}
          onClose={() => setTermsVisible(false)}
          title="Terms and Conditions"
          content={termsContent}
        />
        <ModalPopup
          visible={privacyVisible}
          onClose={() => setPrivacyVisible(false)}
          title="Privacy Policy"
          content={privacyContent}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
