import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Services from './Services';
import Datetime from './Datetime';
import moment from 'moment';
import Confirm from './Confirm';
import Confirmation from './Confirmation';

const Cart = ({navigation}) => {
  const [current, setcurrent] = useState(1);
  const [Selectedservice, setSelectedservice] = useState([]);

  const handelSelectedService = service => {
    setSelectedservice(prev => {
      return prev.includes(service)
        ? prev.filter(item => item !== service)
        : [...prev, service];
    });
  };
  const [Slecteddate, setSelecteddate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [Slectedtime, setSlectedtime] = useState(null);

  const handlecontinue = () => {
    if (current <= 3) {
      if (current === 3) {
        Alert.alert(
          'Confirmation', // Title
          'Do you want to confirm?', // Message
          [
            {
              text: 'Back',
              style: 'cancel',
            },
            {
              text: 'Confirm',
              onPress: () => handleConfirmation(),
            },
          ],
        );
      } else {
        setcurrent(current + 1);
      }
    }
  };

  const handleback = () => {
    if (current <= 3) {
      if (current === 1) {
        navigation.navigate('home');
      } else {
        setcurrent(current - 1);
      }
    }
  };

  const handleConfirmation = () => {
    setcurrent(4)
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'orange',height:current===4 ?80:"auto"}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              margin: 20,
            }}>
            Cart
          </Text>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 40}}>
            <Text
              style={{fontSize: 18, color: current === 1 ? 'blue' : 'white',opacity: current === 4 ? 0 : 1}}>
              Build Cart
            </Text>
            <Text
              style={{fontSize: 18, color: current === 2 ? 'blue' : 'white',opacity: current === 4 ? 0 : 1}}>
              Date & Time
            </Text>
            <Text style={{fontSize: 18 , color: current === 3 ? 'blue' : 'white',opacity: current === 4 ? 0 : 1}}>Confirm</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{padding: 10, flexGrow: 1}}>
          {current === 1 && (
            <Services
              Selectedservice={Selectedservice}
              handlefunction={handelSelectedService}
            />
          )}

          {current === 2 && (
            <Datetime
              Slecteddate={Slecteddate}
              setSelecteddate={setSelecteddate}
              Slectedtime={Slectedtime}
              setSlectedtime={setSlectedtime}
            />
          )}
          {current === 3 && (
            <Confirm
              Selectedservice={Selectedservice}
              Selecteddate={Slecteddate}
              Selectedtime={Slectedtime}
            />
          )}
          {current === 4 && (
            <Confirmation />
          )

          }
        </ScrollView>
        {current <= 3 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 12,
                borderRadius: 15,
                width: 120,
              }}
              onPress={() => handleback()}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 23}}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 12,
                borderRadius: 15,
                width: 120,
              }}
              onPress={() => handlecontinue()}
              disabled={
                (current === 1 && Selectedservice.length === 0) ||
                (current === 2 && (!Slecteddate || !Slectedtime))
              }>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 23,
                  opacity:
                    (current === 1 && Selectedservice.length === 0) ||
                    (current === 2 && (!Slecteddate || !Slectedtime))
                      ? 0.2
                      : 1,
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
