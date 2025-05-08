import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Price = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      {/* <View style={{backgroundColor: 'black', padding: 20}}>
            <Text
              style={{
                // textAlign: 'center',
                color: 'white',
                fontSize: 30,
                fontWeight: 500,
              }}>
              Our Services
            </Text>
          </View> */}

      <View style={{backgroundColor: 'orange', padding: 15, marginBottom: 10}}>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
          }}>
          Price List
        </Text>
      </View>
      <ScrollView style={{padding: 15, flex: 1}}>
        <View style={{flexDirection: 'column', gap: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 5,
              borderRadius: 8,
              padding: 15,
              shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Dry cleaning</Text>
            <Text style={{color: 'white', fontSize: 20}}> 24/PC </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Premium laundry</Text>
            <Text style={{color: 'white', fontSize: 20}}> 179/kg </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              Laundry Wash&Fold
            </Text>
            <Text style={{color: 'white', fontSize: 20}}> 179/kg </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              Laundry Wash&Iron
            </Text>
            <Text style={{color: 'white', fontSize: 20}}> 109/kg </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2a2a2a',
              marginHorizontal: 15,
              // marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              // shadowColor: '#000',
              // shadowOffset: {width: 0, height: 1},
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>steam Press</Text>
            <Text style={{color: 'white', fontSize: 20}}> 17/pc </Text>
          </TouchableOpacity>
          <Text>gffgf</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Price;
