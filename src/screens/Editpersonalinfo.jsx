import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useMutation} from '../../apiservice';

const Editpersonalinfo = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);
  const [username, setusername] = useState('');
  const [userphone, setuserphone] = useState('');
  const [useremail, setuseremail] = useState('');
  const {fetchData, loading: uploading, data} = useMutation();
  // const[usergender,setusergender]=useState('');

  useEffect(() => {
    fetchdetails();
  }, []);

  const fetchdetails = async () => {
    const resp = await fetchData({
      endpoint: 'user/profile',
      method: 'GET',
    });
    if (resp) {
      setusername(resp.name || '');
      setuserphone(resp.ph_no || '');
      setuseremail(resp.email || '');
      setValue(resp.gender || '');
    }
  };

  const handlesubmit = async () => {
    const editteddata = {
      name: username,
      ph_no: userphone,
      email: useremail,
      gender: value,
    };
    try {
      await fetchData({
        endpoint: 'user/profile',
        method: 'PATCH',
        data: editteddata,
      });
      navigation.navigate('personal_info');
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to update data');
    }
  };

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
        <TouchableOpacity onPress={() => navigation.navigate('personal_info')}>
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
          Edit Personal Info
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
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textAlign: 'center',
                margin: 10,
              }}>
            </Text>
          </View>
          <View style={{width: '90%', flexDirection: 'column', gap: 20}}>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>User Name </Text>
              <TextInput
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}
                value={username}
                onChangeText={setusername}
              />
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>
                Phone Number
              </Text>
              <TextInput
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}
                value={userphone}
                onChangeText={setuserphone}
              />
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>Email Id </Text>
              <TextInput
                style={{
                  color: 'white',
                  borderColor: 'blue',
                  borderWidth: 2,
                  borderRadius: 11,
                  padding: 15,
                  alignItems: 'center',
                }}
                value={useremail}
                onChangeText={setuseremail}
              />
            </View>
            <View>
              <Text style={{color: 'white', marginBottom: 5}}>Gender </Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select an option"
                style={{
                  borderColor: 'blue',
                  borderWidth: 2,
                  backgroundColor: 'black',
                }}
                textStyle={{
                  color: 'white',
                }}
                dropDownContainerStyle={{
                  backgroundColor: 'black',
                  borderColor: 'blue',
                }}
                arrowColor="white" // Change arrow color to white
                arrowSize={20}
                dropDownDirection="BOTTOM" // Force dropdown to open downward
                bottomOffset={100} // Add space below dropdown
                listMode="SCROLLVIEW" // Use scrollview mode for better handling
                maxHeight={200}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 15,
                borderRadius: 11,
                marginTop: 50,
              }}
              onPress={() => handlesubmit()}>
              <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Editpersonalinfo;
