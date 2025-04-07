// // // import React, { useState } from 'react';
// // // import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// // // const LaundryCart = () => {
// // //   const [step, setStep] = useState(1); // Tracks current section

// // //   return (
// // //     <View style={styles.container}>
// // //       {step === 1 && (
// // //         <View>
// // //           <Text style={styles.header}>Build your laundry cart</Text>
// // //           <Text>Dry Cleaning, Steam Press, Wash & Fold options...</Text>
// // //         </View>
// // //       )}
// // //       {step === 2 && (
// // //         <View>
// // //           <Text style={styles.header}>Select Date & Time</Text>
// // //           <Text>Choose your preferred slot...</Text>
// // //         </View>
// // //       )}
// // //       {step === 3 && (
// // //         <View>
// // //           <Text style={styles.header}>Enter Address</Text>
// // //           <Text>Provide delivery location...</Text>
// // //         </View>
// // //       )}

// // //       {step < 3 && (
// // //         <TouchableOpacity style={styles.button} onPress={() => setStep(step + 1)}>
// // //           <Text style={styles.buttonText}>Continue</Text>
// // //         </TouchableOpacity>
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
// // //   header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
// // //   button: { backgroundColor: 'green', padding: 15, borderRadius: 10, marginTop: 20 },
// // //   buttonText: { color: 'white', fontSize: 16 },
// // // });

// // // export default LaundryCart;

// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// // const CartScreen = () => {
// //   const [step, setStep] = useState(1); // Step management for switching sections

// //   // Function to handle the "Continue" button click
// //   const handleContinue = () => {
// //     if (step < 4) {
// //       setStep(step + 1);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Header with Step Indicator */}
// //       <View style={styles.header}>
// //         <Text style={styles.headerText}>Cart</Text>
// //         <View style={styles.stepContainer}>
// //           <Text style={[styles.step, step === 1 && styles.activeStep]}>Build Cart</Text>
// //           <Text style={[styles.step, step === 2 && styles.activeStep]}>Date & Time</Text>
// //           <Text style={[styles.step, step === 3 && styles.activeStep]}>Address</Text>
// //           <Text style={[styles.step, step === 4 && styles.activeStep]}>Confirm</Text>
// //         </View>
// //       </View>

// //       {/* Section Content */}
// //       <ScrollView contentContainerStyle={styles.content}>
// //         {step === 1 && (
// //           <View>
// //             <Text style={styles.sectionTitle}>Build your laundry cart</Text>
// //             {/* Sample Services */}
// //             <View style={styles.card}>
// //               {/* <Image source={require('./assets/dry-clean.png')} style={styles.icon} /> */}
// //               <View style={styles.cardContent}>
// //                 <Text style={styles.cardTitle}>Dry Cleaning</Text>
// //                 <Text style={styles.cardDesc}>24/PC onwards • 3-5 Days</Text>
// //               </View>
// //             </View>

// //             <View style={styles.card}>
// //               {/* <Image source={require('./assets/steam-press.png')} style={styles.icon} /> */}
// //               <View style={styles.cardContent}>
// //                 <Text style={styles.cardTitle}>Steam Press</Text>
// //                 <Text style={styles.cardDesc}>17/PC onwards • 12-24 Hrs</Text>
// //               </View>
// //             </View>
// //           </View>
// //         )}

// //         {step === 2 && (
// //           <View>
// //             <Text style={styles.sectionTitle}>Select Date & Time</Text>
// //             <Text style={styles.sectionDesc}>Choose your preferred slot for pickup.</Text>
// //           </View>
// //         )}

// //         {step === 3 && (
// //           <View>
// //             <Text style={styles.sectionTitle}>Enter Address</Text>
// //             <Text style={styles.sectionDesc}>Provide delivery location details.</Text>
// //           </View>
// //         )}

// //         {step === 4 && (
// //           <View>
// //             <Text style={styles.sectionTitle}>Confirm Order</Text>
// //             <Text style={styles.sectionDesc}>Review and confirm your order.</Text>
// //           </View>
// //         )}
// //       </ScrollView>

// //       {/* Continue Button */}
// //       {step < 4 && (
// //         <TouchableOpacity style={styles.button} onPress={handleContinue}>
// //           <Text style={styles.buttonText}>Continue</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#121212' },
// //   header: { padding: 20, alignItems: 'center' },
// //   headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
// //   stepContainer: { flexDirection: 'row', marginTop: 10 },
// //   step: { color: '#777', fontSize: 14, marginHorizontal: 10 },
// //   activeStep: { color: '#fff', fontWeight: 'bold' },
// //   content: { padding: 20 },
// //   sectionTitle: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 10 },
// //   sectionDesc: { color: '#aaa', fontSize: 14 },
// //   card: { flexDirection: 'row', backgroundColor: '#1e1e1e', padding: 15, borderRadius: 10, marginBottom: 10 },
// //   // icon: { width: 40, height: 40, marginRight: 10 },
// //   cardContent: { justifyContent: 'center' },
// //   cardTitle: { color: 'white', fontSize: 16, fontWeight: 'bold' },
// //   cardDesc: { color: '#aaa', fontSize: 14 },
// //   button: { backgroundColor: 'green', padding: 15, alignItems: 'center', borderRadius: 10, margin: 20 },
// //   buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
// // });

// // export default CartScreen;

// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

// const CartScreen = () => {
//   const [step, setStep] = useState(1);
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleServiceSelect = service => {
//     setSelectedServices(prev =>
//       prev.includes(service)
//         ? prev.filter(s => s !== service)
//         : [...prev, service],
//     );
//   };

//   const handleContinue = () => {
//     if (step === 1 && selectedServices.length === 0) {
//       alert('Please select at least one service.');
//       return;
//     }

//     if (step === 1) {
//       fetch('https://your-backend-api.com/select-services', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({services: selectedServices}),
//       })
//         .then(response => response.json())
//         .then(data => console.log('Response:', data))
//         .catch(error => console.error('Error:', error));
//     }

//     if (step < 4) {
//       setStep(step + 1);
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: '#121212'}}>
//       <View style={{padding: 20, alignItems: 'center'}}>
//         <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
//           Cart
//         </Text>
//         <View style={{flexDirection: 'row', marginTop: 10}}>
//           <Text
//             style={{
//               color: step === 1 ? '#fff' : '#777',
//               fontSize: 14,
//               marginHorizontal: 10,
//             }}>
//             Build Cart
//           </Text>
//           <Text
//             style={{
//               color: step === 2 ? '#fff' : '#777',
//               fontSize: 14,
//               marginHorizontal: 10,
//             }}>
//             Date & Time
//           </Text>
//           <Text
//             style={{
//               color: step === 3 ? '#fff' : '#777',
//               fontSize: 14,
//               marginHorizontal: 10,
//             }}>
//             Address
//           </Text>
//           <Text
//             style={{
//               color: step === 4 ? '#fff' : '#777',
//               fontSize: 14,
//               marginHorizontal: 10,
//             }}>
//             Confirm
//           </Text>
//         </View>
//       </View>

//       <ScrollView contentContainerStyle={{padding: 20}}>
//         {step === 1 && (
//           <View>
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 color: 'white',
//                 marginBottom: 10,
//               }}>
//               Build your laundry cart
//             </Text>
//             <TouchableOpacity
//               onPress={() => handleServiceSelect('Dry Cleaning')}
//               style={{
//                 flexDirection: 'row',
//                 backgroundColor: selectedServices.includes('Dry Cleaning')
//                   ? '#4caf50'
//                   : '#1e1e1e',
//                 padding: 15,
//                 borderRadius: 10,
//                 marginBottom: 10,
//               }}>
//               <View style={{justifyContent: 'center'}}>
//                 <Text
//                   style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
//                   Dry Cleaning
//                 </Text>
//                 <Text style={{color: '#aaa', fontSize: 14}}>
//                   24/PC onwards • 3-5 Days
//                 </Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => handleServiceSelect('Steam Press')}
//               style={{
//                 flexDirection: 'row',
//                 backgroundColor: selectedServices.includes('Steam Press')
//                   ? '#4caf50'
//                   : '#1e1e1e',
//                 padding: 15,
//                 borderRadius: 10,
//                 marginBottom: 10,
//               }}>
//               <View style={{justifyContent: 'center'}}>
//                 <Text
//                   style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
//                   Steam Press
//                 </Text>
//                 <Text style={{color: '#aaa', fontSize: 14}}>
//                   17/PC onwards • 12-24 Hrs
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         )}

//         {step === 2 && (
//           <View>
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 color: 'white',
//                 marginBottom: 10,
//               }}>
//               Select Date & Time
//             </Text>
//             <Text style={{color: '#aaa', fontSize: 14}}>
//               Choose your preferred slot for pickup.
//             </Text>
//           </View>
//         )}

//         {step === 3 && (
//           <View>
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 color: 'white',
//                 marginBottom: 10,
//               }}>
//               Enter Address
//             </Text>
//             <Text style={{color: '#aaa', fontSize: 14}}>
//               Provide delivery location details.
//             </Text>
//           </View>
//         )}

//         {step === 4 && (
//           <View>
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 color: 'white',
//                 marginBottom: 10,
//               }}>
//               Confirm Order
//             </Text>
//             <Text style={{color: '#aaa', fontSize: 14}}>
//               Review and confirm your order.
//             </Text>
//           </View>
//         )}
//       </ScrollView>

//       {step < 4 && (
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'green',
//             padding: 15,
//             alignItems: 'center',
//             borderRadius: 10,
//             margin: 20,
//           }}
//           onPress={handleContinue}>
//           <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
//             Continue
//           </Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default CartScreen;

// ............

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const CartScreen = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [address, setAddress] = useState('');

  const handleServiceSelect = service => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service],
    );
  };

  const handleContinue = () => {
    if (step === 1 && selectedServices.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    if (step === 2 && !selectedDateTime) {
      alert('Please select a date and time.');
      return;
    }
    if (step === 3 && !address.trim()) {
      alert('Please enter your address.');
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Cart
        </Text>
      </View>

      <ScrollView contentContainerStyle={{padding: 20}}>
        {step === 1 && (
          <View>
            <Text style={{color: 'white', fontSize: 18, marginBottom: 10}}>
              Build your laundry cart
            </Text>
            <TouchableOpacity
              onPress={() => handleServiceSelect('Dry Cleaning')}
              style={{
                padding: 15,
                backgroundColor: selectedServices.includes('Dry Cleaning')
                  ? 'green'
                  : '#333',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Text style={{color: 'white'}}>Dry Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleServiceSelect('Steam Press')}
              style={{
                padding: 15,
                backgroundColor: selectedServices.includes('Steam Press')
                  ? 'green'
                  : '#333',
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Text style={{color: 'white'}}>Steam Press</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={{color: 'white', fontSize: 18, marginBottom: 10}}>
              Select Date & Time
            </Text>
            <TextInput
              placeholder="Enter date & time"
              placeholderTextColor="#aaa"
              value={selectedDateTime}
              onChangeText={setSelectedDateTime}
              style={{
                backgroundColor: '#333',
                color: 'white',
                padding: 10,
                borderRadius: 5,
              }}
            />
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={{color: 'white', fontSize: 18, marginBottom: 10}}>
              Enter Address
            </Text>
            <TextInput
              placeholder="Enter your address"
              placeholderTextColor="#aaa"
              value={address}
              onChangeText={setAddress}
              style={{
                backgroundColor: '#333',
                color: 'white',
                padding: 10,
                borderRadius: 5,
              }}
            />
          </View>
        )}

        {step === 4 && (
          <View>
            <Text style={{color: 'white', fontSize: 18, marginBottom: 10}}>
              Confirm Order
            </Text>
            <Text style={{color: '#aaa'}}>Review and confirm your order.</Text>
          </View>
        )}
      </ScrollView>

      {step < 4 && (
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 15,
            alignItems: 'center',
            borderRadius: 10,
            margin: 20,
            opacity:
              (step === 1 && selectedServices.length === 0) ||
              (step === 2 && !selectedDateTime) ||
              (step === 3 && !address.trim())
                ? 0.5
                : 1,
          }}
          onPress={handleContinue}
          // disabled={
          //   (step === 1 && selectedServices.length === 0) ||
          //   (step === 2 && !selectedDateTime) ||
          //   (step === 3 && !address.trim())}
          >
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Continue
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartScreen;
