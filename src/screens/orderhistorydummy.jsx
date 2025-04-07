// import React, { useState, useMemo } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   StatusBar, // Import StatusBar
//   Platform // Import Platform for status bar handling
// } from 'react-native';
// // Optional: Import icons if you have react-native-vector-icons installed
// // import Icon from 'react-native-vector-icons/Ionicons'; // Example using Ionicons

// // --- Dummy Data ---
// const initialOrders = [
//   {
//     id: 'UC443-2203',
//     orderDateTime: '2025-03-28, 02:00 PM',
//     pickupDateTime: '2025-03-31, 9 AM - 10 AM',
//     serviceSummary: 'Dry Cleaning',
//     status: 'New Order', // Possible statuses: 'New Order', 'Active', 'Completed', 'Cancelled'
//   },
//   {
//     id: 'UC123-4567',
//     orderDateTime: '2025-03-27, 11:30 AM',
//     pickupDateTime: '2025-03-30, 2 PM - 4 PM',
//     serviceSummary: 'Wash & Fold',
//     status: 'Completed',
//   },
//   {
//     id: 'UC987-6543',
//     orderDateTime: '2025-03-26, 09:00 AM',
//     pickupDateTime: '2025-03-29, 10 AM - 11 AM',
//     serviceSummary: 'Ironing Service',
//     status: 'New Order',
//   },
//    {
//     id: 'UC555-1122',
//     orderDateTime: '2025-03-25, 05:00 PM',
//     pickupDateTime: '2025-03-28, 5 PM - 6 PM',
//     serviceSummary: 'Shoe Cleaning',
//     status: 'Cancelled', // Start with one cancelled for demonstration
//   },
// ];

// // --- Component ---
// const OrderHistoryScreen = ({ navigation }) => { // Assuming you use React Navigation
//   const [activeTab, setActiveTab] = useState('All'); // 'All', 'Active Orders', 'Completed', 'Canceled'
//   const [searchText, setSearchText] = useState('');
//   const [orders, setOrders] = useState(initialOrders);

//   // --- Filtering Logic ---
//   const filteredOrders = useMemo(() => {
//     return orders.filter(order => {
//       // Tab Filter
//       let tabMatch = false;
//       if (activeTab === 'All') {
//         tabMatch = true;
//       } else if (activeTab === 'Active Orders' && (order.status === 'New Order' || order.status === 'Active')) {
//         // Treat 'New Order' as Active for this example
//         tabMatch = true;
//       } else if (activeTab === 'Completed' && order.status === 'Completed') {
//         tabMatch = true;
//       } else if (activeTab === 'Canceled' && order.status === 'Cancelled') { // Match 'Canceled' spelling
//         tabMatch = true;
//       }

//       if (!tabMatch) return false;

//       // Search Filter (case-insensitive)
//       if (searchText === '') return true; // No search text means show all (that match tab)

//       const lowerSearchText = searchText.toLowerCase();
//       return (
//         order.id.toLowerCase().includes(lowerSearchText) ||
//         order.serviceSummary.toLowerCase().includes(lowerSearchText)
//         // Add other searchable fields like address if needed
//       );
//     });
//   }, [orders, activeTab, searchText]);

//   // --- Event Handlers ---
//   const handleCancelOrder = (orderId) => {
//     setOrders(currentOrders =>
//       currentOrders.map(order =>
//         order.id === orderId ? { ...order, status: 'Cancelled' } : order
//       )
//     );
//     // Add logic here to call backend API to actually cancel the order
//     console.log('Cancel Order:', orderId);
//   };

//   const handleViewDetails = (orderId) => {
//     // Navigate to a detailed order screen if you have one
//     console.log('View Details for:', orderId);
//     // Example navigation: navigation.navigate('OrderDetailScreen', { orderId });
//   };

//    const handleContactStore = (orderId) => {
//     // Implement contacting the store (e.g., open dialer, chat)
//     console.log('Contact Store for:', orderId);
//   };

//   // --- Render Order Item ---
//   const renderOrderItem = ({ item }) => {
//     const isCancelable = item.status === 'New Order' || item.status === 'Active';
//     const isCancelled = item.status === 'Cancelled';
//     const isCompleted = item.status === 'Completed'; // Add check for completed status

//     return (
//       <View style={styles.orderCard}>
//         <View style={styles.orderHeader}>
//           <Text style={styles.orderId}>Order ID - {item.id}</Text>
//           {/* Status Labels */}
//           {isCancelable && <Text style={[styles.statusLabel, styles.statusNew]}>New Order</Text>}
//           {isCancelled && <Text style={[styles.statusLabel, styles.statusCancelled]}>Cancelled</Text>}
//           {isCompleted && <Text style={[styles.statusLabel, styles.statusCompleted]}>Completed</Text>}
//           {/* Add other status labels like 'Active', 'In Progress' if needed */}
//         </View>

//         <View style={styles.orderDetails}>
//           <Text style={styles.detailText}>Order Date & Time : {item.orderDateTime}</Text>
//           <Text style={styles.detailText}>Pickup Date & Time : {item.pickupDateTime}</Text>
//           {/* Conditionally show summary or details link */}
//           {!isCancelled && !isCompleted && ( // Don't show summary if Cancelled or Completed
//              <View style={styles.summaryContainer}>
//                 <Text style={styles.detailText}>Order Summary :</Text>
//                 <Text style={[styles.detailText, styles.serviceText]}>{item.serviceSummary}</Text>
//              </View>
//           )}
//           {/* Always show View Details? Or hide for cancelled? Adjust as needed */}
//            <TouchableOpacity onPress={() => handleViewDetails(item.id)} style={styles.viewDetailsButton}>
//              <Text style={styles.viewDetailsText}>View Details</Text>
//            </TouchableOpacity>
//         </View>

//         {/* Buttons - Only show for Active/New orders */}
//         {isCancelable && (
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.actionButton}
//               onPress={() => handleContactStore(item.id)}>
//               <Text style={styles.contactButtonText}>Contact Store</Text>
//             </TouchableOpacity>
//             <View style={styles.buttonSeparator} />
//             <TouchableOpacity
//               style={styles.actionButton}
//               onPress={() => handleCancelOrder(item.id)}>
//               <Text style={styles.cancelButtonText}>Cancel Order</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     );
//   };

//   // --- Main Render ---
//   return (
//     <SafeAreaView style={styles.safeArea}>
//        {/* Ensure status bar text is readable on dark background */}
//        <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor="#1C1C1E" />
//        {/* Header */}
//       <View style={styles.header}>
//          {/* Replace with actual back button using navigation */}
//         <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
//              {/* <Icon name="arrow-back" size={24} color="#FFF" /> */}
//              <Text style={{ color: '#FFF', fontSize: 24 }}>←</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Order History</Text>
//          {/* Optional: Add a placeholder on the right if needed for balance */}
//          <View style={styles.backButton} />
//       </View>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['All', 'Active Orders', 'Completed', 'Canceled'].map((tab) => ( // Corrected 'Canceled' spelling
//           <TouchableOpacity
//             key={tab}
//             style={styles.tabItem}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
//               {tab}
//             </Text>
//             {activeTab === tab && <View style={styles.activeTabIndicator} />}
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         {/* <Icon name="search" size={20} color="#8E8E93" style={styles.searchIcon} /> */}
//         <Text style={styles.searchIcon}>🔍</Text>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for Order ID, Service, Address etc"
//           placeholderTextColor="#8E8E93"
//           value={searchText}
//           onChangeText={setSearchText}
//           selectionColor="#4CAF50" // Optional: Cursor color
//         />
//       </View>

//       {/* Order List */}
//       <FlatList
//         data={filteredOrders}
//         renderItem={renderOrderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContainer}
//         ListEmptyComponent={<Text style={styles.emptyListText}>No orders found.</Text>}
//       />

//        {/* --- Floating Action Button Placeholder --- */}
//        {/* This usually comes from the Navigator or a parent component */}
//        {/* <TouchableOpacity style={styles.fab}>
//            <Text style={styles.fabText}>+</Text>
//        </TouchableOpacity> */}

//     </SafeAreaView>
//   );
// };

// // --- Styles ---
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#121212', // Dark background
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', // Space between back, title, placeholder
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#1C1C1E', // Slightly lighter dark shade for header
//   },
//   backButton: {
//     padding: 5, // Make it easier to tap
//     width: 30, // Give it a defined width
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#1C1C1E', // Same as header or main background
//     paddingTop: 10,
//   },
//   tabItem: {
//     paddingBottom: 10,
//     alignItems: 'center',
//   },
//   tabText: {
//     color: '#8E8E93', // Inactive tab text color
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#4CAF50', // Active tab text color (Green)
//     fontWeight: 'bold',
//   },
//   activeTabIndicator: {
//     height: 3,
//     width: '100%', // Make indicator full width of the text container
//     backgroundColor: '#4CAF50', // Green indicator
//     marginTop: 5,
//     borderRadius: 1.5,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#2C2C2E', // Dark input background
//     borderRadius: 10,
//     margin: 15,
//     paddingHorizontal: 10,
//   },
//   searchIcon: {
//     marginRight: 8,
//      color: '#8E8E93', // Icon Color
//      fontSize: 18, // Adjust if using text as icon
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 10,
//     color: '#FFFFFF', // Input text color
//     fontSize: 14,
//   },
//   listContainer: {
//     paddingHorizontal: 15,
//     paddingBottom: 80, // Add padding to avoid FAB overlap if needed
//   },
//   orderCard: {
//     backgroundColor: '#2C2C2E', // Card background
//     borderRadius: 8,
//     marginBottom: 15,
//     padding: 15,
//     overflow: 'hidden', // Ensures children stay within rounded borders
//   },
//   orderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   orderId: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   statusLabel: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 4,
//     overflow: 'hidden', // Keep text within rounded corners
//   },
//   statusNew: {
//     color: '#FFFFFF',
//     backgroundColor: '#4CAF50', // Green
//   },
//   statusCancelled: {
//     color: '#FFFFFF',
//     backgroundColor: '#F44336', // Red
//   },
//   statusCompleted: {
//       color: '#FFFFFF',
//       backgroundColor: '#607D8B', // A neutral/blue-grey color
//   },
//   orderDetails: {
//     marginBottom: 15,
//      borderBottomWidth: 1, // Add separator line if needed
//      borderBottomColor: '#444', // Separator color
//      paddingBottom: 10, // Space before the separator
//   },
//   detailText: {
//     color: '#E0E0E0', // Light gray text
//     fontSize: 13,
//     lineHeight: 18, // Improve readability
//     marginBottom: 4,
//   },
//    summaryContainer: {
//       flexDirection: 'row', // Keep summary label and value on same line potentially
//       alignItems: 'center', // Align items vertically
//       marginTop: 5,
//    },
//    serviceText: {
//       color: '#FFFFFF', // Make service stand out slightly
//       fontWeight: '500',
//       marginLeft: 5, // Add space after "Order Summary :"
//    },
//    viewDetailsButton: {
//       alignSelf: 'flex-end', // Position to the right
//       marginTop: -18, // Adjust to align nicely near pickup date/time visually
//    },
//   viewDetailsText: {
//     color: '#4CAF50', // Green link color
//     fontSize: 13,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     // marginTop: 10, // Add space if needed after details
//     borderTopWidth: 1, // Line separator above buttons
//     borderTopColor: '#444', // Separator color
//     paddingTop: 10, // Space above buttons
//   },
//   actionButton: {
//     flex: 1, // Make buttons take equal space
//     alignItems: 'center', // Center text horizontally
//     paddingVertical: 8,
//   },
//   buttonSeparator: {
//     width: 1,
//     backgroundColor: '#444', // Vertical separator color
//     marginVertical: -10, // Extend separator visually if needed
//   },
//   contactButtonText: {
//     color: '#4CAF50', // Green text
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   cancelButtonText: {
//     color: '#F44336', // Red text
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   emptyListText: {
//       color: '#8E8E93',
//       textAlign: 'center',
//       marginTop: 50,
//       fontSize: 16,
//   },
//     // FAB styles (Placeholder - likely managed by navigation)
// //   fab: {
// //     position: 'absolute',
// //     right: 30,
// //     bottom: 90, // Adjust based on your bottom nav height
// //     backgroundColor: '#4CAF50',
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     elevation: 8, // Android shadow
// //     shadowColor: '#000', // iOS shadow
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //   },
// //   fabText: {
// //     fontSize: 30,
// //     color: 'white',
// //     lineHeight: 30, // Adjust for vertical centering
// //   },
// });

// export default OrderHistoryScreen;