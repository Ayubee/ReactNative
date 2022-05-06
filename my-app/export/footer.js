import React from 'react'
import { Text, View, SafeAreaView,Image,StyleSheet,TextInput,Button,Linking } from 'react-native'


export default function Footer (){
    return(
        <SafeAreaView style={{height:600,backgroundColor:'#575445'}}>
            <View>
                <Image source={require('../img/dutdoor.svg')} style={{width:200,height:60,marginLeft:'auto',marginRight:'auto',marginTop:20}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
                <View >
                    <Text style={style.text}>Pages</Text>
                    <Text style={style.subText}>Home</Text>
                    <Text style={style.subText}>Categories</Text>
                    <Text style={style.subText}>Buyer's guides</Text>
                    <Text style={style.subText}>404</Text>
                    <Text style={style.subText}>Password</Text>
                </View>

                <View>
                    <Text style={style.text}>Gear categories</Text>
                    <Text style={style.subText}>Home</Text>
                    <Text style={style.subText}>Categories</Text>
                    <Text style={style.subText}>Buyer's guides</Text>
                    <Text style={style.subText}>404</Text>
                    <Text style={style.subText}>Password</Text>
                </View>

                <View>
                <Text style={style.text}>Company</Text>
                    <Text style={style.subText}>Home</Text>
                    <Text style={style.subText}>Categories</Text>
                    <Text style={style.subText}>Buyer's guides</Text>
                    <Text style={style.subText}>404</Text>
                    <Text style={style.subText}>Password</Text>
                </View>
            </View>
        <View style=
        {{marginTop:25}}>
            <Text style={{color:'#E6B939',fontSize:20,textAlign:'center',fontFamily:'sans-serif'}}>
            Newsletter
            </Text>
            <Text style={{color:'#fff',width:'90%',marginLeft:'auto',marginRight:'auto'}}>
            Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.
            </Text>
            <View style={{marginTop:20}}>
            <TextInput style={style.input} placeholder='Email'/>
            <a style={{backgroundColor:'#575445',textDecoration:'none',color:'#fff',borderRadius:15,position:'absolute',left:'80%',top:'15%',width:73,height:39,textAlign:'center'}} href='#'>Submit</a>
            </View>
            
            <View><Text style={{width:'90%',marginTop:10,color:'#fff',marginLeft:'auto',marginRight:'auto'}}>© Outdoor Exploration, LLC. All rights reserved. Powered by Webflow</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
           <a href='#' style={{}}> <Image style={style.subImg} source={require('../img/IN.svg')}/></a>
           <a href='https://facebook.com/' style={{}}> <Image style={style.subImg} source={require('../img/FACEBOOK.svg')}/></a>
           <a href='https://www.instagram.com/' style={{}}> <Image style={style.subImg} source={require('../img/insta.svg')}/></a>
           <a href='https://twitter.com/' style={{}}> <Image style={style.subImg} source={require('../img/twitt.svg')}/></a>
           </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    text:{
        color:'#E6B939',
        fontFamily:'sans-serif'
    },
    subText:{
        fontFamily:'saans-serif',
        color:'#fff',
        fontSize:14,
        marginTop:5

    },
    input:{
        width:'100%',
        height:55,
        borderRadius:15,
        backgroundColor:'#fff',
        paddingLeft:'25px'
    },
    Btn:{
        backgroundColor:'#575445',
        color:'#575445',
        width:'50%'
    },
    subImg:{
        width:30,
        height:30
    }
})