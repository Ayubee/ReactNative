import React from 'react'
import { Text, View, SafeAreaView,Image,StyleSheet,TextInput,Button,Linking } from 'react-native'


export default function Footer (){
    return(
        <SafeAreaView style={{height:'100%',backgroundColor:'#575445'}}>
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
        <View>
            <Text>
            Newsletter
            </Text>
            <Text>
            Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.
            </Text>
            <View>
            <TextInput style={style.input} placeholder='Email'/>
            <a style={{backgroundColor:'#575445',textDecoration:'none',color:'#fff',borderRadius:15,position:'absolute',left:'80%',top:'20%',width:73,height:39,textAlign:'center'}} href='#'>Submit</a>
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
    }
})