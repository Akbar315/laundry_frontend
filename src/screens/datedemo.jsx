// // // import React, { useState } from "react";
// // // import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

// // // const LaundryAppUI = () => {
// // //   const [selectedDate, setSelectedDate] = useState("27");
// // //   const [selectedTime, setSelectedTime] = useState("03:00 PM to 05:00 PM");

// // //   const dates = ["26", "27", "28", "29", "30", "31", "01"];
// // //   const times = [
// // //     "09:00 AM to 10:00 AM",
// // //     "10:00 AM to 11:00 AM",
// // //     "11:00 AM to 01:00 PM",
// // //     "01:00 PM to 03:00 PM",
// // //     "03:00 PM to 05:00 PM",
// // //     "05:00 PM to 07:00 PM",
// // //     "07:00 PM to 08:00 PM",
// // //   ];

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <Text style={styles.headerTitle}>Build Cart - Date & Time</Text>
// // //       </View>
      
// // //       {/* Date Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pick-Up Date</Text>
// // //       <View style={styles.dateContainer}>
// // //         {dates.map((date) => (
// // //           <TouchableOpacity
// // //             key={date}
// // //             style={[styles.dateBox, selectedDate === date && styles.selectedBox]}
// // //             onPress={() => setSelectedDate(date)}
// // //           >
// // //             <Text style={[styles.dateText, selectedDate === date && styles.selectedText]}>{date}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </View>
      
// // //       {/* Time Slot Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pick-Up Time</Text>
// // //       <View style={styles.timeContainer}>
// // //         {times.map((time) => (
// // //           <TouchableOpacity
// // //             key={time}
// // //             style={[styles.timeBox, selectedTime === time && styles.selectedBox]}
// // //             onPress={() => setSelectedTime(time)}
// // //           >
// // //             <Text style={[styles.timeText, selectedTime === time && styles.selectedText]}>{time}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#f8f8f8",
// // //     padding: 20,
// // //   },
// // //   header: {
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   headerTitle: {
// // //     fontSize: 20,
// // //     fontWeight: "bold",
// // //     color: "#333",
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //     color: "#555",
// // //   },
// // //   dateContainer: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     marginBottom: 20,
// // //   },
// // //   dateBox: {
// // //     padding: 10,
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 5,
// // //     backgroundColor: "#fff",
// // //   },
// // //   selectedBox: {
// // //     backgroundColor: "#007bff",
// // //     borderColor: "#007bff",
// // //   },
// // //   dateText: {
// // //     fontSize: 16,
// // //     color: "#000",
// // //   },
// // //   selectedText: {
// // //     color: "#fff",
// // //   },
// // //   timeContainer: {
// // //     flexWrap: "wrap",
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //   },
// // //   timeBox: {
// // //     padding: 15,
// // //     marginBottom: 10,
// // //     width: "48%",
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 5,
// // //     backgroundColor: "#fff",
// // //     alignItems: "center",
// // //   },
// // //   timeText: {
// // //     fontSize: 16,
// // //     color: "#000",
// // //   },
// // // });

// // // export default LaundryAppUI;
// // // ........................




// // // import React, { useState } from "react";
// // // import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";

// // // const LaundryAppUI = () => {
// // //   const [selectedDate, setSelectedDate] = useState("27");
// // //   const [selectedTime, setSelectedTime] = useState("03:00 PM to 05:00 PM");

// // //   const dates = [
// // //     { day: "Tue", date: "26" },
// // //     { day: "Wed", date: "27" },
// // //     { day: "Thu", date: "28" },
// // //     { day: "Fri", date: "29" },
// // //     { day: "Sat", date: "30" },
// // //     { day: "Sun", date: "31" },
// // //     { day: "Mon", date: "01" },
// // //   ];

// // //   const times = [
// // //     "09:00 AM to 10:00 AM",
// // //     "10:00 AM to 11:00 AM",
// // //     "11:00 AM to 01:00 PM",
// // //     "01:00 PM to 03:00 PM",
// // //     "03:00 PM to 05:00 PM",
// // //     "05:00 PM to 07:00 PM",
// // //     "07:00 PM to 08:00 PM",
// // //   ];

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         {/* <Image source={require("./back-icon.png")} style={styles.backIcon} /> */}
// // //         <Text style={styles.headerTitle}>Select Pickup Date & Time</Text>
// // //       </View>
      
// // //       {/* Stepper */}
// // //       <View style={styles.stepper}>
// // //         <Text style={styles.stepActive}>Build Cart</Text>
// // //         <Text style={styles.stepActive}>→ Date & Time</Text>
// // //         <Text style={styles.stepInactive}>→ Address</Text>
// // //         <Text style={styles.stepInactive}>→ Confirm</Text>
// // //       </View>
      
// // //       {/* Date Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pickup Date</Text>
// // //       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
// // //         {dates.map(({ day, date }) => (
// // //           <TouchableOpacity
// // //             key={date}
// // //             style={[styles.dateBox, selectedDate === date && styles.selectedBox]}
// // //             onPress={() => setSelectedDate(date)}
// // //           >
// // //             <Text style={[styles.dayText, selectedDate === date && styles.selectedText]}>{day}</Text>
// // //             <Text style={[styles.dateText, selectedDate === date && styles.selectedText]}>{date}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </ScrollView>
      
// // //       {/* Time Slot Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pickup Time</Text>
// // //       <View style={styles.timeContainer}>
// // //         {times.map((time) => (
// // //           <TouchableOpacity
// // //             key={time}
// // //             style={[styles.timeBox, selectedTime === time && styles.selectedBox]}
// // //             onPress={() => setSelectedTime(time)}
// // //           >
// // //             <Text style={[styles.timeText, selectedTime === time && styles.selectedText]}>{time}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#fff",
// // //     padding: 15,
// // //   },
// // //   header: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   backIcon: {
// // //     width: 24,
// // //     height: 24,
// // //     marginRight: 10,
// // //   },
// // //   headerTitle: {
// // //     fontSize: 20,
// // //     fontWeight: "bold",
// // //     color: "#333",
// // //   },
// // //   stepper: {
// // //     flexDirection: "row",
// // //     marginBottom: 20,
// // //   },
// // //   stepActive: {
// // //     fontSize: 14,
// // //     fontWeight: "bold",
// // //     color: "#007bff",
// // //   },
// // //   stepInactive: {
// // //     fontSize: 14,
// // //     color: "#ccc",
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //     color: "#333",
// // //   },
// // //   dateScroll: {
// // //     flexDirection: "row",
// // //     marginBottom: 20,
// // //   },
// // //   dateBox: {
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 15,
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     marginRight: 10,
// // //     alignItems: "center",
// // //   },
// // //   selectedBox: {
// // //     backgroundColor: "#007bff",
// // //     borderColor: "#007bff",
// // //   },
// // //   dayText: {
// // //     fontSize: 14,
// // //     color: "#666",
// // //   },
// // //   dateText: {
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //     color: "#000",
// // //   },
// // //   selectedText: {
// // //     color: "#fff",
// // //   },
// // //   timeContainer: {
// // //     flexWrap: "wrap",
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //   },
// // //   timeBox: {
// // //     padding: 15,
// // //     marginBottom: 10,
// // //     width: "48%",
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     backgroundColor: "#fff",
// // //     alignItems: "center",
// // //   },
// // //   timeText: {
// // //     fontSize: 16,
// // //     color: "#000",
// // //   },
// // // });

// // // export default LaundryAppUI;
// // // .........calender

// // // import React, { useState, useEffect } from "react";
// // // import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
// // // import moment from "moment";

// // // const LaundryAppUI = () => {
// // //   const [selectedDate, setSelectedDate] = useState(moment().format("DD"));
// // //   const [selectedTime, setSelectedTime] = useState(null);
// // //   const [availableTimes, setAvailableTimes] = useState([]);

// // //   // Generate next 7 days dynamically
// // //   const dates = Array.from({ length: 7 }, (_, i) => {
// // //     const day = moment().add(i, "days");
// // //     return { day: day.format("ddd"), date: day.format("DD") };
// // //   });

// // //   // Time slots based on selected date (simulating availability)
// // //   useEffect(() => {
// // //     if (selectedDate === moment().format("DD")) {
// // //       setAvailableTimes(["03:00 PM to 05:00 PM", "05:00 PM to 07:00 PM"]);
// // //     } else {
// // //       setAvailableTimes([
// // //         "09:00 AM to 10:00 AM",
// // //         "10:00 AM to 11:00 AM",
// // //         "11:00 AM to 01:00 PM",
// // //         "01:00 PM to 03:00 PM",
// // //         "03:00 PM to 05:00 PM",
// // //         "05:00 PM to 07:00 PM",
// // //         "07:00 PM to 08:00 PM",
// // //       ]);
// // //     }
// // //   }, [selectedDate]);

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         {/* <Image source={require("./back-icon.png")} style={styles.backIcon} /> */}
// // //         <Text style={styles.headerTitle}>Select Pickup Date & Time</Text>
// // //       </View>
      
// // //       {/* Stepper */}
// // //       <View style={styles.stepper}>
// // //         <Text style={styles.stepActive}>Build Cart</Text>
// // //         <Text style={styles.stepActive}>→ Date & Time</Text>
// // //         <Text style={styles.stepInactive}>→ Address</Text>
// // //         <Text style={styles.stepInactive}>→ Confirm</Text>
// // //       </View>
      
// // //       {/* Date Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pickup Date</Text>
// // //       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
// // //         {dates.map(({ day, date }) => (
// // //           <TouchableOpacity
// // //             key={date}
// // //             style={[styles.dateBox, selectedDate === date && styles.selectedBox]}
// // //             onPress={() => setSelectedDate(date)}
// // //           >
// // //             <Text style={[styles.dayText, selectedDate === date && styles.selectedText]}>{day}</Text>
// // //             <Text style={[styles.dateText, selectedDate === date && styles.selectedText]}>{date}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </ScrollView>
      
// // //       {/* Time Slot Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pickup Time</Text>
// // //       <View style={styles.timeContainer}>
// // //         {availableTimes.map((time) => (
// // //           <TouchableOpacity
// // //             key={time}
// // //             style={[styles.timeBox, selectedTime === time && styles.selectedBox]}
// // //             onPress={() => setSelectedTime(time)}
// // //           >
// // //             <Text style={[styles.timeText, selectedTime === time && styles.selectedText]}>{time}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#fff",
// // //     padding: 15,
// // //   },
// // //   header: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   backIcon: {
// // //     width: 24,
// // //     height: 24,
// // //     marginRight: 10,
// // //   },
// // //   headerTitle: {
// // //     fontSize: 20,
// // //     fontWeight: "bold",
// // //     color: "#333",
// // //   },
// // //   stepper: {
// // //     flexDirection: "row",
// // //     marginBottom: 20,
// // //   },
// // //   stepActive: {
// // //     fontSize: 14,
// // //     fontWeight: "bold",
// // //     color: "#007bff",
// // //   },
// // //   stepInactive: {
// // //     fontSize: 14,
// // //     color: "#ccc",
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //     color: "#333",
// // //   },
// // //   dateScroll: {
// // //     flexDirection: "row",
// // //     marginBottom: 20,
// // //   },
// // //   dateBox: {
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 15,
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     marginRight: 10,
// // //     alignItems: "center",
// // //   },
// // //   selectedBox: {
// // //     backgroundColor: "#007bff",
// // //     borderColor: "#007bff",
// // //   },
// // //   dayText: {
// // //     fontSize: 14,
// // //     color: "#666",
// // //   },
// // //   dateText: {
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //     color: "#000",
// // //   },
// // //   selectedText: {
// // //     color: "#fff",
// // //   },
// // //   timeContainer: {
// // //     flexWrap: "wrap",
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //   },
// // //   timeBox: {
// // //     padding: 15,
// // //     marginBottom: 10,
// // //     width: "48%",
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     backgroundColor: "#fff",
// // //     alignItems: "center",
// // //   },
// // //   timeText: {
// // //     fontSize: 16,
// // //     color: "#000",
// // //   },
// // // });

// // // export default LaundryAppUI;
// // // ..............

// // // import React, { useState, useEffect } from "react";
// // // import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
// // // import moment from "moment";

// // // const LaundryAppUI = () => {
// // //   const [selectedDate, setSelectedDate] = useState(moment().format("DD"));
// // //   const [selectedTime, setSelectedTime] = useState(null);
// // //   const [availableTimes, setAvailableTimes] = useState([]);

// // //   // Generate the next 7 days dynamically
// // //   const dates = Array.from({ length: 7 }, (_, i) => {
// // //     const day = moment().add(i, "days");
// // //     return { day: day.format("ddd"), dayNumber: day.format("DD") };
// // //   });

// // //   // Time slots update based on selected date
// // //   useEffect(() => {
// // //     if (selectedDate === moment().format("DD")) {
// // //       setAvailableTimes(["03:00 PM to 05:00 PM", "05:00 PM to 07:00 PM"]);
// // //     } else {
// // //       setAvailableTimes([
// // //         "09:00 AM to 10:00 AM",
// // //         "10:00 AM to 11:00 AM",
// // //         "11:00 AM to 01:00 PM",
// // //         "01:00 PM to 03:00 PM",
// // //         "03:00 PM to 05:00 PM",
// // //         "05:00 PM to 07:00 PM",
// // //         "07:00 PM to 08:00 PM",
// // //       ]);
// // //     }
// // //   }, [selectedDate]);

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <Text style={styles.headerTitle}>Select Pickup Date & Time</Text>
// // //       </View>

// // //       {/* Stepper */}
// // //       <View style={styles.stepper}>
// // //         <Text style={styles.stepActive}>Build Cart</Text>
// // //         <Text style={styles.stepActive}>→ Date & Time</Text>
// // //         <Text style={styles.stepInactive}>→ Address</Text>
// // //         <Text style={styles.stepInactive}>→ Confirm</Text>
// // //       </View>

// // //       {/* Date Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pickup Date</Text>
// // //       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
// // //         {dates.map(({ day, dayNumber }) => (
// // //           <TouchableOpacity
// // //             key={dayNumber}
// // //             style={[styles.dateBox, selectedDate === dayNumber && styles.selectedBox]}
// // //             onPress={() => setSelectedDate(dayNumber)}
// // //           >
// // //             <Text style={[styles.dayText, selectedDate === dayNumber && styles.selectedText]}>{day}</Text>
// // //             <Text style={[styles.dateText, selectedDate === dayNumber && styles.selectedText]}>{dayNumber}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </ScrollView>

// // //       {/* Time Slot Selection */}
// // //       <Text style={styles.sectionTitle}>Select Pickup Time</Text>
// // //       <View style={styles.timeContainer}>
// // //         {availableTimes.map((time) => (
// // //           <TouchableOpacity
// // //             key={time}
// // //             style={[styles.timeBox, selectedTime === time && styles.selectedBox]}
// // //             onPress={() => setSelectedTime(time)}
// // //           >
// // //             <Text style={[styles.timeText, selectedTime === time && styles.selectedText]}>{time}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#fff",
// // //     padding: 15,
// // //   },
// // //   header: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   headerTitle: {
// // //     fontSize: 20,
// // //     fontWeight: "bold",
// // //     color: "#333",
// // //   },
// // //   stepper: {
// // //     flexDirection: "row",
// // //     marginBottom: 20,
// // //   },
// // //   stepActive: {
// // //     fontSize: 14,
// // //     fontWeight: "bold",
// // //     color: "#007bff",
// // //   },
// // //   stepInactive: {
// // //     fontSize: 14,
// // //     color: "#ccc",
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //     color: "#333",
// // //   },
// // //   dateScroll: {
// // //     flexDirection: "row",
// // //     marginBottom: 20,
// // //   },
// // //   dateBox: {
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 15,
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     marginRight: 10,
// // //     alignItems: "center",
// // //   },
// // //   selectedBox: {
// // //     backgroundColor: "#007bff",
// // //     borderColor: "#007bff",
// // //   },
// // //   dayText: {
// // //     fontSize: 14,
// // //     color: "#666",
// // //   },
// // //   dateText: {
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //     color: "#000",
// // //   },
// // //   selectedText: {
// // //     color: "#fff",
// // //   },
// // //   timeContainer: {
// // //     flexWrap: "wrap",
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //   },
// // //   timeBox: {
// // //     padding: 15,
// // //     marginBottom: 10,
// // //     width: "48%",
// // //     borderWidth: 1,
// // //     borderColor: "#ccc",
// // //     borderRadius: 10,
// // //     backgroundColor: "#fff",
// // //     alignItems: "center",
// // //   },
// // //   timeText: {
// // //     fontSize: 16,
// // //     color: "#000",
// // //   },
// // // });

// // // export default LaundryAppUI;





// // import React, { useState, useEffect } from "react";
// // import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
// // import moment from "moment";

// // const LaundryAppUI = () => {
// //   const [selectedDate, setSelectedDate] = useState(moment().format("DD"));
// //   const [selectedTime, setSelectedTime] = useState(null);
// //   const [availableTimes, setAvailableTimes] = useState([]);

// //   // Generate next 7 days dynamically
// //   const dates = Array.from({ length: 7 }, (_, i) => {
// //     const day = moment().add(i, "days");
// //     return { day: day.format("ddd"), date: day.format("DD") };
// //   });

// //   // Time slots based on selected date (simulating availability)
// //   useEffect(() => {
// //     if (selectedDate === moment().format("DD")) {
// //       setAvailableTimes(["03:00 PM to 05:00 PM", "05:00 PM to 07:00 PM"]);
// //     } else {
// //       setAvailableTimes([
// //         "09:00 AM to 10:00 AM",
// //         "10:00 AM to 11:00 AM",
// //         "11:00 AM to 01:00 PM",
// //         "01:00 PM to 03:00 PM",
// //         "03:00 PM to 05:00 PM",
// //         "05:00 PM to 07:00 PM",
// //         "07:00 PM to 08:00 PM",
// //       ]);
// //     }
// //   }, [selectedDate]);

// //   const sendDataToBackend = async () => {
// //     if (!selectedDate || !selectedTime) {
// //       Alert.alert("Error", "Please select both date and time!");
// //       return;
// //     }

// //     const requestData = {
// //       date: selectedDate,
// //       time: selectedTime,
// //     };

// //     try {
// //       const response = await fetch("https://your-api-endpoint.com/api/booking", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(requestData),
// //       });

// //       const responseData = await response.json();
// //       if (response.ok) {
// //         Alert.alert("Success", "Booking confirmed!");
// //       } else {
// //         Alert.alert("Error", responseData.message);
// //       }
// //     } catch (error) {
// //       console.error("Error sending data:", error);
// //       Alert.alert("Error", "Failed to connect to server.");
// //     }
// //   };

// //   return (
// //     <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
// //       <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
// //         <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>Select Pickup Date & Time</Text>
// //       </View>
// //       <View style={{ flexDirection: "row", marginBottom: 20 }}>
// //         <Text style={{ fontSize: 14, fontWeight: "bold", color: "#007bff" }}>Build Cart → Date & Time</Text>
// //         <Text style={{ fontSize: 14, color: "#ccc" }}> → Address → Confirm</Text>
// //       </View>
// //       <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#333" }}>Select Pickup Date</Text>
// //       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginBottom: 20 }}>
// //         {dates.map(({ day, date }) => (
// //           <TouchableOpacity
// //             key={date}
// //             style={{
// //               paddingVertical: 10,
// //               paddingHorizontal: 15,
// //               borderWidth: 1,
// //               borderColor: "#ccc",
// //               borderRadius: 10,
// //               marginRight: 10,
// //               alignItems: "center",
// //               backgroundColor: selectedDate === date ? "#007bff" : "#fff",
// //             }}
// //             onPress={() => setSelectedDate(date)}
// //           >
// //             <Text style={{ fontSize: 14, color: selectedDate === date ? "#fff" : "#666" }}>{day}</Text>
// //             <Text style={{ fontSize: 16, fontWeight: "bold", color: selectedDate === date ? "#fff" : "#000" }}>{date}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </ScrollView>
// //       <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#333" }}>Select Pickup Time</Text>
// //       <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
// //         {availableTimes.map((time) => (
// //           <TouchableOpacity
// //             key={time}
// //             style={{
// //               padding: 15,
// //               marginBottom: 10,
// //               width: "48%",
// //               borderWidth: 1,
// //               borderColor: "#ccc",
// //               borderRadius: 10,
// //               backgroundColor: selectedTime === time ? "#007bff" : "#fff",
// //               alignItems: "center",
// //             }}
// //             onPress={() => setSelectedTime(time)}
// //           >
// //             <Text style={{ fontSize: 16, color: selectedTime === time ? "#fff" : "#000" }}>{time}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //       <TouchableOpacity
// //         style={{ backgroundColor: "#007bff", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 }}
// //         onPress={sendDataToBackend}
// //       >
// //         <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Confirm & Book</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // export default LaundryAppUI;



// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
// import moment from "moment";

// const LaundryAppUI = () => {
//   const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [availableTimes, setAvailableTimes] = useState([]);

//   // Generate next 7 days dynamically
//   const dates = Array.from({ length: 7 }, (_, i) => {
//     const day = moment().add(i, "days");
//     return { day: day.format("ddd"), date: day.format("YYYY-MM-DD") };
//   });

//   // Function to get available time slots based on real-time logic
//   const getAvailableTimeSlots = (date) => {
//     const currentTime = moment();
//     const selectedDay = moment(date, "YYYY-MM-DD");
//     const allTimeSlots = [
//       "09:00 AM to 10:00 AM",
//       "10:00 AM to 11:00 AM",
//       "11:00 AM to 01:00 PM",
//       "01:00 PM to 03:00 PM",
//       "03:00 PM to 05:00 PM",
//       "05:00 PM to 07:00 PM",
//       "07:00 PM to 08:00 PM",
//     ];
    
//     if (selectedDay.isSame(moment(), 'day')) {
//       return allTimeSlots.filter((slot) => {
//         const slotStartTime = moment(slot.split(" to ")[0], "hh:mm A");
//         return slotStartTime.isAfter(currentTime.add(30, "minutes"));
//       });
//     }
//     return allTimeSlots;
//   };

//   useEffect(() => {
//     setAvailableTimes(getAvailableTimeSlots(selectedDate));
//   }, [selectedDate]);

//   const sendDataToBackend = async () => {
//     if (!selectedDate || !selectedTime) {
//       Alert.alert("Error", "Please select both date and time!");
//       return;
//     }

//     const requestData = {
//       date: selectedDate,
//       time: selectedTime,
//     };

//     try {
//       const response = await fetch("https://your-api-endpoint.com/api/booking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       const responseData = await response.json();
//       if (response.ok) {
//         Alert.alert("Success", "Booking confirmed!");
//       } else {
//         Alert.alert("Error", responseData.message);
//       }
//     } catch (error) {
//       console.error("Error sending data:", error);
//       Alert.alert("Error", "Failed to connect to server.");
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
//       <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 10 }}>Select Pickup Date & Time</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginBottom: 20 }}>
//         {dates.map(({ day, date }) => (
//           <TouchableOpacity
//             key={date}
//             style={{
//               paddingVertical: 10,
//               paddingHorizontal: 15,
//               borderWidth: 1,
//               borderColor: "#ccc",
//               borderRadius: 10,
//               marginRight: 10,
//               alignItems: "center",
//               backgroundColor: selectedDate === date ? "#007bff" : "#fff",
//             }}
//             onPress={() => setSelectedDate(date)}
//           >
//             <Text style={{ fontSize: 14, color: selectedDate === date ? "#fff" : "#666" }}>{day}</Text>
//             <Text style={{ fontSize: 16, fontWeight: "bold", color: selectedDate === date ? "#fff" : "#000" }}>{moment(date).format("DD")}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#333" }}>Select Pickup Time</Text>
//       <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
//         {availableTimes.length > 0 ? (
//           availableTimes.map((time) => (
//             <TouchableOpacity
//               key={time}
//               style={{
//                 padding: 15,
//                 marginBottom: 10,
//                 width: "48%",
//                 borderWidth: 1,
//                 borderColor: "#ccc",
//                 borderRadius: 10,
//                 backgroundColor: selectedTime === time ? "#007bff" : "#fff",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedTime(time)}
//             >
//               <Text style={{ fontSize: 16, color: selectedTime === time ? "#fff" : "#000" }}>{time}</Text>
//             </TouchableOpacity>
//           ))
//         ) : (
//           <Text style={{ fontSize: 16, color: "#999", textAlign: "center", width: "100%" }}>No available slots</Text>
//         )}
//       </View>
//       <TouchableOpacity
//         style={{ backgroundColor: "#007bff", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 }}
//         onPress={sendDataToBackend}
//       >
//         <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Confirm & Book</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default LaundryAppUI;




import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import moment from "moment";

const LaundryAppUI = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Generate next 7 days dynamically
  const dates = Array.from({ length: 7 }, (_, i) => {
    const day = moment().add(i, "days");
    return { day: day.format("ddd"), date: day.format("YYYY-MM-DD") };
  });

  // Function to get available time slots based on real-time logic
  const getAvailableTimeSlots = (date) => {
    const currentTime = moment();
    const selectedDay = moment(date, "YYYY-MM-DD");
    const allTimeSlots = [
      "09:00 AM to 10:00 AM",
      "10:00 AM to 11:00 AM",
      "11:00 AM to 01:00 PM",
      "01:00 PM to 03:00 PM",
      "03:00 PM to 05:00 PM",
      "05:00 PM to 07:00 PM",
      "07:00 PM to 08:00 PM",
    ];
    
    if (selectedDay.isSame(moment(), 'day')) {
      return allTimeSlots.filter((slot) => {
        const slotStartTime = moment(slot.split(" to ")[0], "hh:mm A");
        return slotStartTime.isAfter(currentTime);
      });
    }
    return allTimeSlots;
  };

  useEffect(() => {
    setAvailableTimes(getAvailableTimeSlots(selectedDate));
  }, [selectedDate]);

  const sendDataToBackend = async () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert("Error", "Please select both date and time!");
      return;
    }

    const requestData = {
      date: selectedDate,
      time: selectedTime,
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Booking confirmed!");
      } else {
        Alert.alert("Error", responseData.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      Alert.alert("Error", "Failed to connect to server.");
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 10 }}>Select Pickup Date & Time</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginBottom: 20 }}>
        {dates.map(({ day, date }) => (
          <TouchableOpacity
            key={date}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              marginRight: 10,
              alignItems: "center",
              backgroundColor: selectedDate === date ? "#007bff" : "#fff",
            }}
            onPress={() => setSelectedDate(date)}
          >
            <Text style={{ fontSize: 14, color: selectedDate === date ? "#fff" : "#666" }}>{day}</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: selectedDate === date ? "#fff" : "#000" }}>{moment(date).format("DD")}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#333" }}>Select Pickup Time</Text>
      <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => (
            <TouchableOpacity
              key={time}
              style={{
                padding: 15,
                marginBottom: 10,
                width: "48%",
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                backgroundColor: selectedTime === time ? "#007bff" : "#fff",
                alignItems: "center",
              }}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={{ fontSize: 16, color: selectedTime === time ? "#fff" : "#000" }}>{time}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={{ fontSize: 16, color: "#999", textAlign: "center", width: "100%" }}>No available slots</Text>
        )}
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "#007bff", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 }}
        onPress={sendDataToBackend}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Confirm & Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LaundryAppUI;
