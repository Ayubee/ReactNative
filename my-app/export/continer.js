import React from "react";
import { Image, Text , StyleSheet ,View,SafeAreaView } from 'react-native'

export default function Continer () {

    return(
    <SafeAreaView  style={{textAlign:'center',flex:3,top:376}}>
        <Text style={styles.title}>Our promise</Text>
        <Text style={styles.link}>Setting the bar for our products.</Text>
        <Text style={styles.href}>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</Text>

        <View style={styles.content}>
    <View style={styles.subconiner}>
            <Image style={styles.img} source={require('../img/leaf.svg')}/>
            <Text style={styles.sublink}>Sustainable sourcing</Text>
            <Text style={styles.href}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Text>
    </View>

    <View style={styles.subconiner}>
            <Image style={styles.img} source={require('../img/secyurity.svg')}/>
            <Text style={styles.sublink}>Lifetime warranty</Text>
            <Text style={styles.href}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Text>
    </View>

    <View style={styles.subconiner}>
            <Image style={styles.img} source={require('../img/Event.svg')}/>
            <Text style={styles.sublink}>All-terrain tested</Text>
            <Text style={styles.href}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Text>
    </View >

    <View style={styles.subconiner}>
            <Image style={styles.img} source={require('../img/material.svg')}/>
            <Text style={styles.sublink}>Premium materials</Text>
            <Text style={styles.href}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Text>
    </View>

    <View style={styles.subconiner}>
            <Image style={styles.img} source={require('../img/disgn.svg')}/>
            <Text style={styles.sublink}>Designed by you</Text>
            <Text style={styles.href}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Text>
    </View>

    <View style={styles.subconiner}>
            <Image style={styles.img} source={require('../img/search.svg')}/>
            <Text style={styles.sublink}>Quality assured</Text>
            <Text style={styles.href}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Text>
    </View>
        </View>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    subconiner:{
        marginLeft:'auto',
        marginRight:'auto',
    },
    title:{
        color:'#E6B939',
        fontFamily:'sans-serif',
        marginBottom: 10
    },
    link:{
        fontFamily:'sans-serif',
        marginBottom: 10,
        fontWeight: 400,
        fontSize:28
    },
    href:{
        width:'70%',
        marginLeft:'auto',
        marginRight:'auto',
        fontFamily:'sans-serif',
        fontWeight: 400,
        fontSize:15
    },

    content:{
        marginTop: 30,
        marginLeft:'auto',
        marginRight:'auto',
    },
    img:{
        marginTop:10,
        marginLeft:'auto',
        marginRight:'auto',
        width:50,
        height:50
    },
    sublink:{
        marginTop:10,
        fontFamily:'sans-serif',
        marginBottom: 10,
        fontWeight: 400,
        fontSize:20
    }


})