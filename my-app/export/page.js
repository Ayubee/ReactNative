import React from "react";
import {StyleSheet,Text,ImageBackground,Image,View, SafeAreaView} from 'react-native'

export default function Page (){

    return(
<SafeAreaView style={{marginTop:55}}>
    <View style={{
        textAlign:'center',
        fontFamily:'sans-serif'
    }}>
        <Text style={styles.title}>Meet the family</Text>
        <Text style={styles.link}>What we have in store for you.</Text>
        <Text style={styles.href}>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</Text>
    </View>

    <View style={styles.conainer}></View>
    <View style={styles.conainer}></View>
    <View style={styles.conainer}></View>
    <View style={styles.conainer}></View>
    <View style={styles.conainer}></View>
    <View style={styles.conainer}></View>
</SafeAreaView>
)
}

const styles = StyleSheet.create({
    title:{
        color:'#E6B939',
        fontFamily:'sans-serif',
        marginBottom: 5
    },  
    link:{
        fontFamily:'sans-serif',
        fontWeight: 400,
        fontSize:23
    },
    href:{
        width:'80%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 10,
        fontFamily:'sans-serif',
        fontWeight: 400,
        fontSize:15
    },
})