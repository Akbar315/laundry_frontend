import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Keychain from 'react-native-keychain';

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{navigation.replace("Register")} 
    ,5000);
  } , [navigation]);

  // const verification = async () =>{
  //   const token = await Keychain.getGenericPassword();
  //   if(token){
  //     navigation.replace("home");
  //   }else{
  //     navigation.replace("Register");
  //   }
  // };

  return (
    <SafeAreaView style={{}}>
        <View style={{backgroundColor:"orange",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <Image style={{height:500,width:250, resizeMode:"contain"}} source={require('../assets/images/Laundrylogo.webp')} />
            
        </View>
    </SafeAreaView>
  )
}

export default Splash