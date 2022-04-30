import React from 'react';
import { Text, View,SafeAreaView,Image, StyleSheet } from 'react-native';

export default function Promo () {
    return(
        <View style={{flex:1}}>
            <Image source={require('../img/Promo-pic.png')} style={{
                width:'100%',
                height:576
            }}/>

            <View style={{width:'100%', height:350,
        justifyContent:'center',textAlign:'center'}}>
                <Text style={styles.title}>
                Who are we?
                </Text>
                <Text style={styles.link}>
                A bit about us.
                </Text>
                <Text style={styles.href}>
                We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    title:{
        color:'#E6B939',
        fontFamily:'sans-serif',
        marginBottom: 10
    },

    link:{
        color:'#222222',
        fontFamily:'sans-serif',
        fontSize:28,
        fontWeight:400,
        marginBottom:11
    },

    href:{
        width:'70%',
        marginLeft:'auto',
        marginRight:'auto',
        color:'#22222',
        fontFamily:'sans-serif'
    }
    
})