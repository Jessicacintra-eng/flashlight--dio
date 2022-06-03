import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'


import imageOn from './assets/icons/eco-light.png'
import imageOff from './assets/icons/eco-light-off.png'
import logoWhite from './assets/icons/logo-dio-white.png'
import logoColor from './assets/icons/logo-dio.png'

const App=()=>{
  const [toggle, setToggle] = useState(false);
  const handdleChangeToggle= () => setToggle((oldToggle) => !oldToggle)
  
  //light on/off by touch
  useEffect(()=>{
    Torch.switchState(toggle)
  },[toggle])

  //light on/off by shaking
  useEffect(()=>{
    const subscription= RNShake.addListener(()=>{
      setToggle((oldToggle) => !oldToggle)
    })
    return ()=> subscription.remove()
  },[])

  return (
  <View style={toggle? style.containerLight : style.container}>
    <TouchableOpacity onPress={
      handdleChangeToggle
    }>

      <Image 
        style={toggle? style.lightningOn:style.lightningOff}
        source={toggle? imageOn:imageOff}
      /> 
      <Image 
        style={style.dioLogo}
        source={toggle? logoColor:logoWhite}
      /> 
      
      </TouchableOpacity>
  </View>
  )
}
export default App

const style = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
  },
  containerLight:{
    flex:1, 
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  lightningOn:{
    resizeMode:'contain',
    alignSelf:'center',
    width : 150,
    height : 150,

  },
  lightningOff:{
    resizeMode:'contain',
    alignSelf:'center',
    tintColor:'white',
    width : 150,
    height : 150,

  },
  dioLogo:{
    resizeMode:'contain',
    alignSelf:'center',
    width : 250,
    height : 150,

  },
  

})