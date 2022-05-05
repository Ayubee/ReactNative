import React from "react";
import {Text , Image,StyleSheet,View,SafeAreaView} from 'react-native'

export default function Content (){
    return (
<SafeAreaView   style={{height:600}}>
        <View style={{marginLeft:'auto',marginRight:'auto'}}>
        <Image style={{width:300,height:300}} source={require('../img/info.png')}/>
        </View>
        <View style={{textAlign:'center',width:'70%',marginLeft:'auto',marginRight:'auto'}}> 
                <Text style={{fontFamily:'sans-serif',color:'#E6B939'}}>Some light reading</Text>
                <Text style={{fontFamily:'sans-serif',fontSize:25}}>Subscribe to our magazine today.</Text>
                <Text style={{fontFamily:'sans-serif',fontSize:15}}>We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</Text>
        </View>
</SafeAreaView>
    )
}

const style = StyleSheet.create({

})



