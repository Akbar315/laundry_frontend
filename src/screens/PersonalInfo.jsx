import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useMutation} from '../../apiservice';

const PersonalInfo = ({navigation, route}) => {
  // const {Uname, Uphone, Uemail, Ugender} = route.params;
  // const [Updateddata,setUpdatedata]=useState({
  //   username: route.params?.Uname || '',
  //   phone: route.params?.Uphone || '',
  //   email: route.params?.Uemail || '',
  //   gender: route.params?.Ugender || '',
  // });
  const [Profiledata, setProfiledata] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
  });
  const {fetchData, loading: uploading, data} = useMutation();

  useEffect(() => {
    fetchuserdetails();
  }, []);

  // console.log('hello', data);

  const fetchuserdetails = async () => {
    try {
      let resp = await fetchData({
        endpoint: 'user/profile',
        method: 'GET',
      });
      // console.log('hi---------------',resp, data)
      if (resp) {
        setProfiledata({
          name: resp.name || '',
          phone: resp.ph_no || '',
          email: resp.email || '',
          gender: resp.gender || '',
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to fetch data');
    }
  };
  const handleDeactivate = ()=>{
    console.log("account deactivated successfully")
    navigation.navigate("Login")
  }
  // console.log('the data------------->', Uname);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // paddingVertical: 15,
            // paddingHorizontal: 15,
            padding: 18,
            backgroundColor: 'orange',
            borderBottomWidth: 1,
            borderBottomColor: '#333',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('account')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 28,
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
            }}>
            Personal Info
          </Text>
          <View style={{width: 30}} />
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View>
            {/* <TouchableOpacity
              style={{backgroundColor: 'white'}}
              onPress={() => navigation.goBack('account')}>
              <Text>go back </Text>
            </TouchableOpacity> */}
            {/* <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                margin: 10,
              }}>
              Personal Info
            </Text> */}
          </View>
          <View
            style={{
              width: '90%',
              flexDirection: 'column',
              gap: 20,
              marginTop: 40,
            }}>
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
                {Profiledata.name}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>
                Phone Number
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
                {Profiledata.phone}
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
                {Profiledata.email}
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
                {Profiledata.gender}
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
              style={{backgroundColor: 'red', padding: 15, borderRadius: 11}}
              onPress={() =>
                Alert.alert(
                  'Confirmation',
                  'Do you want to deactivate your account?',
                  [
                    {
                      text: 'Back',
                      style: 'cancel',
                    },
                    {
                      text: 'Confirm',
                      onPress: () => handleDeactivate(), // Call your deactivate function
                    },
                  ],
                )
              }>
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
