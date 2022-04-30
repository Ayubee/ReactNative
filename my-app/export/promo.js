import React from 'react';
import { Text, View,SafeAreaView,Image, } from 'react-native';

export default function Promo () {
    return(
        <View style={{flex:1}}>
            <Image source={require('../img/Promo-pic.png')} style={{
                width:'100%',
                height:576
            }}/>

            <View style={{backgroundColor:'red'}}>
                <Text>
                Who are we?
                </Text>
                <Text>
                A bit about us.
                </Text>
                <Text>
                We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.
                </Text>
            </View>
        </View>
    )
}