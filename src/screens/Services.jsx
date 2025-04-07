import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Services = ({Selectedservice , handlefunction}) => {
    // const [selected, setSelected] = useState([]);
    // const handleServiceSelected = service => {
    //   setSelected(prev => {
    //     console.log('Previous selected services:', prev);
    //     console.log('New selection:', service);
    //     return prev.includes(service)
    //       ? prev.filter(item => item !== service)
    //       : [...prev, service];
    //   });
    // };
  return (
    <View style={{margin: 25}}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Build your laundry
      </Text>
      <View style={{}}>
        <TouchableOpacity
          style={{
            padding: 15,
            marginTop: 30,
            borderWidth: Selectedservice.includes('Dry cleaning') ? 6 : 2,
            borderColor: 'blue',
            borderRadius: 15,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            // boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          onPress={() => handlefunction('Dry cleaning')}>
          <View style={{flexDirection: 'column', gap: 11}}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Dry Cleaning
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                24/PC onwards • 3-5 Days
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 14}}>
                • Formal wear, Oranamental
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Blankets, Quilts, Curtains
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Bags, Shoes, Soft Toys
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            marginTop: 30,
            borderWidth: Selectedservice.includes('Steam press') ? 6 : 2,
            borderColor: 'blue',
            borderRadius: 15,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            // boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          onPress={() => handlefunction('Steam press')}>
          <View style={{flexDirection: 'column', gap: 11}}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Steam Press
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                17/PC onwards • 12-24 Hrs
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 14}}>
                • Vaccum Steam Iron
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Individually Packed
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Hanger or Folded Packing
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            marginTop: 30,
            borderWidth: Selectedservice.includes('Wash & Fold') ? 6 : 2,
            borderColor: 'blue',
            borderRadius: 15,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            // boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          onPress={() => handlefunction('Wash & Fold')}>
          <View style={{flexDirection: 'column', gap: 11}}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Laundry - Wash & Fold
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                79/KG onwards • 12-24 Hrs
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 14}}>
                • Laundry by Kilo
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Stack Packing
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Intimate wear , Socks
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            marginTop: 30,
            borderWidth: Selectedservice.includes('Wash & Iron') ? 6 : 2,
            borderColor: 'blue',
            borderRadius: 15,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            // boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          onPress={() => handlefunction('Wash & Iron')}>
          <View style={{flexDirection: 'column', gap: 11}}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Laundry - Wash & Iron
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                109/KG onwards • 24-48 Hrs
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 14}}>
                • Laundry by Kilo
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Stack Packing
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Vaccum Steam Iron
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            marginTop: 30,
            borderWidth: Selectedservice.includes('Premium') ? 6 : 2,
            borderColor: 'blue',
            borderRadius: 15,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            // boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          onPress={() => handlefunction('Premium')}>
          <View style={{flexDirection: 'column', gap: 11}}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Premium Laundry Kg
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                179/KG onwards • 24-48 Hrs
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 14}}>• Formal wear</Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Bedsheets, Dohars
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                • Delicates etc.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
                        style={{
                          padding: 15,
                          // marginTop: 30,
                          borderWidth: 2,
                          borderColor: 'blue',
                          borderRadius: 15,
                          backgroundColor: 'rgba(52, 52, 52, 0.5)',
                            // boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        }}>
                        <View style={{flexDirection: 'column', gap: 11}}>
                          <View>
                            <Text
                              style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                              }}>
                              Dry Cleaning
                            </Text>
                            <Text style={{color: 'white', fontSize: 14}}>
                              24/PC onwards • 3-5 Days
                            </Text>
                          </View>
                          <View>
                            <Text style={{color: 'white', fontSize: 14}}>
                              • Formal wear, Oranamental
                            </Text>
                            <Text style={{color: 'white', fontSize: 14}}>
                              • Blankets, Quilts, Curtains
                            </Text>
                            <Text style={{color: 'white', fontSize: 14}}>
                              • Bags, Shoes, Soft Toys
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Services;
