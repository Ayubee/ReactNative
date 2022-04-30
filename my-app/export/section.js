import React from "react";
import { Image,Text,View,ImageBackground, StyleSheet } from 'react-native';

export default function Section () {
    return(
        <View style={{marginBottom: 250}}>
            <ImageBackground source={require('../img/section.png')} style={{flex: 1,
           width:'100%',
           height:380}}/>

           <View style={styles.continer}>
               <Text style={styles.title}>
               OUTDOOR EXPLORATION
               </Text>
               <Text style={styles.link}>
               Gear for when it actually matters.
               </Text>
               <Text style={styles.href}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
               </Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    continer:{
        alignItems:'center',
        textAlign:'center',
        marginTop:80
    },
    title:{
        color:'#E6B939',
        fontFamily:'sans-serif',
        marginBottom: 10
    },
    link:{
        color:'#fff',
        fontFamily:'sans-serif',
        marginBottom: 10,
        fontWeight: 400,
        fontSize:28
    },
    href:{
        color:'#fff',
        fontFamily:'sans-serif',
        fontWeight: 400,
        fontSize:15
    },
})