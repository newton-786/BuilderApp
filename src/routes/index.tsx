import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import MainStack from './stacks/mainStack';
import AuthStack from './stacks/authStack';
import images from "../assets/images/images";
import {View,Image,StyleSheet} from "react-native";
import {RF} from "../shared/theme/responsive";
import colors from "../assets/colors/colors";

const RootStack = () => {
  const {user,authToken} = useSelector((state: any) => state.root.user);
const [splash,setsplash]=useState(true)


  useEffect(()=>{
    console.log("user ====>>>>>",user);
    console.log("authToken ====>>>>>",authToken);

    setTimeout(()=>{
       setsplash(false)
    },1500)
  },[]);


      return <>{ <AuthStack/>}</>

};

export default RootStack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.WHITE
  },
  imageStyle:{
    height:RF(200),
    width:RF(200),
    resizeMode:'contain'
  },
})
