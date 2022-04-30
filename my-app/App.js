import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import { Header, Section, Promo, Continer } from './export/*'
import Header from './export/header';
import Section from './export/section';
import Promo from './export/promo';
import Continer from './export/continer';
import Page from './export/page';
import { StyleSheet, Text, View,SafeAreaView,Image,Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Section/>
      <Promo/>
      <Continer/>
      <Page/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    
    flex:1
  }
});
