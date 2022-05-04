import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,Button,ImageBackground } from 'react-native';
import { Linking } from 'react-native-web';

export default function Wrap () {
    return (
        <SafeAreaView style={{height:550}}>
            <View >
                <ImageBackground source={require('../img/IMAGE.png')} style={{width:'100%',height:530}}>

                <View style={{width:'50%',height:150,marginTop:'90%',marginLeft:'47%',backgroundColor:'black',borderRadius:15,justifyContent:'space-evenly'}}>

                    <View style={{flexDirection:'row',marginLeft:5}}>
                        <Image source={require('../img/shop.svg')} style={{width:15,height:15,}}/>
                        <Text style={{color:'#fff',marginLeft:10}}>First Aid Kit Banger Bottle</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:5}}>
                        <Image source={require('../img/photograph.svg')} style={{width:15,height:15}}/>
                        <Text style={{color:'#fff',marginLeft:10}}>Brian Schultz</Text>
                        
                    </View>
                    <View style={{flexDirection:'row',marginLeft:5}}>
                        <Image source={require('../img/user.svg')} style={{width:15,height:15,flexDirection:'row'}}/>
                        <Text style={{color:'#fff',marginLeft:10}}>Leah Stoff</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:5}}>
                        <Image source={require('../img/send.svg')} style={{width:15,height:15,flexDirection:'row'}}/>
                        <Text style={{color:'#fff',marginLeft:10}}>Catalina, California</Text>
                    </View>
                    </View>
                </ImageBackground>
                <View style={style.wrapContiner}>
                    <View style={style.subContent}>
                        <Text style={style.text}>Shop</Text>
                        <Text style={{color:'#E6B939',fontFamily:'sans-serif',marginTop:10,fontSize:25}}>Check out our products.</Text>
                        <Text style={style.text}>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</Text>
                        <a href='#' style={{width:111,height:44,borderRadius:15,backgroundColor:'#fff',paddingTop:15,textDecoration:'none',fontFamily:'sans-serif',color:'black',marginLeft:'38%',marginTop:15}}>Visit shop</a>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create ({
    subContent:{
        marginTop:100
    },
    text:{
        fontSize:15,
        marginTop:10,
        color:'#fff',
        fontFamily:'sans-serif'

    },
    wrapContiner:{
        textAlign:'center',
        height:400,
        backgroundColor:'#375C58'
    },
    btn:{
        width:30
    }
})
