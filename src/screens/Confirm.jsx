import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import moment from 'moment';

const Confirm = ({Selectedservice, Selecteddate, Selectedtime}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{width: '90%', flexDirection: 'column', padding: 35,gap:15}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            Confirm Your Order
          </Text>
          <View>
            <Text style={{color: 'white'}}>Order Type</Text>
            <Text
              style={{
                color: 'white',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                paddingVertical:5
              }}>
              {Selectedservice}
            </Text>
          </View>
          <View>
            <Text style={{color: 'white'}}>Drop-off Date</Text>
            <Text
              style={{
                color: 'white',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                paddingVertical:5

              }}>
              {moment(Selecteddate, 'YYYY-MM-DD').format('DD-MM-YYYY')}

            </Text>
          </View>
          <View>
            <Text style={{color: 'white'}}>Drop-off Time</Text>
            <Text
              style={{
                color: 'white',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                paddingVertical:5

              }}>
              {Selectedtime}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirm;
