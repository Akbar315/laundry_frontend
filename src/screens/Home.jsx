import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Welcome RASHIII</Text>
      </View>


      <Text>Home</Text>
      <TouchableOpacity style={{margin:20}} onPress={()=>navigation.navigate('account')}>
        <Text>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{margin:20}} onPress={()=>navigation.navigate('carts')}>
        <Text>Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{margin:20}} onPress={()=>navigation.navigate('faq')}>
        <Text>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}} onPress={()=>navigation.navigate('servicedetails')}>
        <Text>Service details</Text>
      </TouchableOpacity>





    </View>
  )
}

export default Home