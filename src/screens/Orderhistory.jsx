import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert, // Import StatusBar
} from 'react-native';
import {useMutation} from '../../apiservice';

// Dummy data - simulating data from a backend
// const initialOrders = [
//   {
//     id: 'UC443-2203',
//     orderDate: '2025-03-28, 02:00 PM',
//     pickupDate: '2025-03-31, 9 AM - 10 AM',
//     summary: 'Dry Cleaning',
//     status: 'active', // 'active', 'completed', 'canceled'
//   },
//   {
//     id: 'UC123-4567',
//     orderDate: '2025-03-27, 11:00 AM',
//     pickupDate: '2025-03-30, 2 PM - 3 PM',
//     summary: 'Wash & Fold',
//     status: 'completed',
//   },
//   {
//     id: 'UC987-6543',
//     orderDate: '2025-03-29, 09:30 AM',
//     pickupDate: '2025-04-01, 10 AM - 11 AM',
//     summary: 'Ironing Service',
//     status: 'active',
//   },
//   {
//     id: 'UC555-1122',
//     orderDate: '2025-03-25, 05:00 PM',
//     pickupDate: '2025-03-28, 4 PM - 5 PM',
//     summary: 'Shoe Cleaning',
//     status: 'canceled',
//   },
// ];

const OrderHistory = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [orders, setOrders] = useState([]);
  const [searchText, setSearchText] = useState('');
  const {fetchData, loading: uploading, data} = useMutation();
  useEffect(() => {
    fetchallorders();
  }, []);
  console.log("orders=========>",orders)

  const fetchallorders = async () => {
    const response = await fetchData({endpoint: 'bookings', method: 'GET'});

    if (response?.bookings) {
      const transformed = response.bookings.map(item => ({
        id:item.id,
        orderid: item.order_id,
        pickupDate: `${item.booking_date}, ${item.booking_time}`,
        summary: item.services.join(', '),
        status: item.status?.toLowerCase(),
      }));
      setOrders(transformed);
    }
  };

  const fetchid = async orderId =>{
    const match = await orders.find(order => order.orderid === orderId);
    return match ? match.id : null ;
  }

  const handleCancelOrder = async Id => {
    try {
      const response = await fetchData({
        endpoint: `bookings/${Id}/cancel`,
        method: 'PATCH',
      });
  
      if (response) {
        setOrders(prevOrders => {
          const updatedOrders = prevOrders.map(order =>
            order.id === Id ? {...order, status: 'cancelled'} : order,
          );
          return [...updatedOrders]; // return new array to force re-render
        });
      } else {
        console.error('Failed to cancel order:', response);
        Alert.alert('Error', 'Failed to cancel the order. Please try again.');
      }
    } catch (error) {
      console.error('Cancel order error:', error);
      Alert.alert('Error', 'Something went wrong.');
    }
  };
  console.log('updated orders------------>', orders)
  const filteredOrders = orders.filter(order => {
    const statusMatch =
      selectedTab === 'All' ||
      (selectedTab === 'Active Orders' && order.status === 'active') ||
      (selectedTab === 'Completed' && order.status === 'completed') ||
      (selectedTab === 'Canceled' && order.status === 'cancelled');

    const searchLower = searchText.toLowerCase();
    const searchMatch =
      !searchText ||
      order.orderid.toLowerCase().includes(searchLower) ||
      order.summary.toLowerCase().includes(searchLower) ||
      order.pickupDate.toLowerCase().includes(searchLower);

    return statusMatch && searchMatch;
  });

  const getOrderStatusStyle = status => {
    let style = {
      fontSize: 13,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 4,
    };
    if (status === 'active') {
      style.color = 'blue'; // Green
      // style.backgroundColor = 'rgba(76, 175, 80, 0.1)'; // Light green background tint
    } else if (status === 'cancelled') {
      style.color = '#F44336'; // Red
      // style.backgroundColor = 'rgba(244, 67, 54, 0.1)'; // Light red background tint
    } else if (status === 'completed') {
      style.color = 'blue'; // Green
      // style.backgroundColor = 'rgba(76, 175, 80, 0.1)'; // Light green background tint
    } else {
      return null; // Don't render for 'completed' or others for now
    }
    return style;
  };

  const renderOrderStatus = status => {
    const statusStyle = getOrderStatusStyle(status);
    if (!statusStyle) return null;

    let statusText = '';
    if (status === 'active') statusText = 'New Order';
    if (status === 'cancelled') statusText = 'Canceled';
    if (status === 'completed') statusText = 'Completed';

    return <Text style={statusStyle}>{statusText}</Text>;
  };

  const renderTabs = () => {
    const tabs = ['All', 'Active Orders', 'Completed', 'Canceled'];
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#1F1F1F',
          paddingTop: 10,
        }}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={{
              paddingBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => setSelectedTab(tab)}>
            <Text
              style={{
                color: selectedTab === tab ? 'blue' : 'white', // Conditional color
                fontSize: 14,
                fontWeight: selectedTab === tab ? 'bold' : '500', // Conditional weight
              }}>
              {tab}
            </Text>
            {selectedTab === tab && (
              <View
                style={{
                  height: 3,
                  width: '100%',
                  backgroundColor: 'blue',
                  marginTop: 5,
                  borderRadius: 1.5,
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#121212" /> */}

      {/* Header */}
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
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
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
          Order History
        </Text>
        <View style={{width: 30}} />
      </View>

      {/* Tabs */}
      {renderTabs()}

      {/* Search Bar */}
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: '#333333',
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        {/* <Text style={{fontSize: 18, color: '#888', marginRight: 5}}>🔍</Text> */}
        <TextInput
          style={{
            flex: 1,
            height: 40,
            color: '#FFFFFF',
            fontSize: 14,
          }}
          placeholder="Search for Order ID, Service"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Orders List */}
      <ScrollView style={{flex: 1}}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <View
              key={order.orderid}
              style={{
                backgroundColor: '#2a2a2a',
                marginHorizontal: 15,
                marginBottom: 15,
                borderRadius: 8,
                padding: 15,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Order ID - {order.orderid}
                </Text>
                {renderOrderStatus(order.status)}
              </View>

              <View style={{marginBottom: 15}}>
                {/* <Text
                  style={{
                    color: '#CCCCCC',
                    fontSize: 13,
                    lineHeight: 18,
                    marginBottom: 4,
                  }}>
                  Order Date & Time : {order.orderDate}
                </Text> */}
                <Text
                  style={{
                    color: '#CCCCCC',
                    fontSize: 13,
                    lineHeight: 18,
                    marginBottom: 4,
                  }}>
                  Drop-off Date & Time : {order.pickupDate}
                </Text>
                {/* {order.status !== 'canceled' && ( */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      color: '#CCCCCC',
                      fontSize: 13,
                      fontWeight: '600',
                      marginRight: 5,
                    }}>
                    Order Summary :
                  </Text>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 13,
                      flexShrink: 1, // Allow wrap
                    }}>
                    {order.summary}
                  </Text>
                </View>
                {/* )} */}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  // borderTopColor: '#444',
                  // borderTopWidth: 1,
                  paddingTop: 10,
                  marginTop: 5,
                }}>
                {order.status === 'active' && (
                  <TouchableOpacity  onPress={async() => {
                    const internalId = await fetchid(order.orderid); 
                    if (internalId) {
                      handleCancelOrder(internalId);
                    } else {
                      Alert.alert('Error', 'Could not find order to cancel.');
                    }
                  }}>
                    <Text
                      style={{
                        color: '#F44336',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      Cancel Order
                    </Text>
                  </TouchableOpacity>
                )}
                {/* Add a Spacer View if only View Details is shown after cancel,
                         to keep View Details aligned to the right */}
                {order.status !== 'active' && <View />}

                {/* <TouchableOpacity
                  onPress={() => console.log('View Details for:', order.id)}>
                  <Text
                    style={{
                      color: '#4CAF50',
                      fontSize: 14,
                      fontWeight: '500',
                    }}>
                    View Details
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          ))
        ) : (
          <Text
            style={{
              color: '#AAAAAA',
              textAlign: 'center',
              marginTop: 50,
              fontSize: 16,
            }}>
            No orders found.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistory;
