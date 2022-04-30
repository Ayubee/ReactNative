import React from "react";
import  { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,Button } from 'react-native';

export default function Header(){
        
    
    return (
        <SafeAreaView style={styles.promo}>

<View style={{alignItems:'center',marginBottom:20}}>
    <Image source={require('../img/header-icon.svg')} style={{
          resizeMode: "cover",
          display:'flex',
          width: 128,
          height:39 
        }}/>
</View>
            <View style={{alignItems:'center',}}>
          <div  >
            <a style={{display:'block', textAlign:'center',fontFamily:'sans-serif', textDecoration:'none', marginBottom:15, color:'#222222'}} href=''>Shop</a>
            <a style={{display:'block', textAlign:'center',fontFamily:'sans-serif', textDecoration:'none', marginBottom:15, color:'#222222'}} href=''>About us</a>
            <a style={{display:'block', textAlign:'center',fontFamily:'sans-serif', textDecoration:'none', marginBottom:15, color:'#222222'}} href=''>Our team</a>
            <a style={{display:'block', textAlign:'center',fontFamily:'sans-serif', textDecoration:'none', marginBottom:15, color:'#222222'}} href=''>Buyer's guides</a>
            <a style={{display:'block', textAlign:'center',fontFamily:'sans-serif', textDecoration:'none', marginBottom:15, color:'#222222'}} href=''>Categories</a>
          </div>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    click:{
        width:150,
        height:100
    },

    promo:{
 

    }
})

