import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Header from './export/header';
import Section from './export/section';
import Promo from './export/promo';
import { StyleSheet, Text, View,SafeAreaView,Image,Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Section/>
      <Promo/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  flex:{
    display:'none'
  },

  section: {
    // width: 300,
    // height:300,
    // backgroundColor: 'yellow'
    display:'none'
  },
  footer: {
    // width: 300,
    // height:300,
    // backgroundColor: 'green'
    display:'none'
  },
  text:{
    color: 'blue',
  left: "20",
  },
});
