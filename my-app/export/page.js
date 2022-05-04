import React from "react";
import {StyleSheet,Text,ImageBackground,Image,View, SafeAreaView} from 'react-native'

export default function Page (){

    return(
<SafeAreaView style={{marginTop:55,marginBottom:250}}>
    <View style={{
        textAlign:'center',
        fontFamily:'sans-serif'
    }}>
        <Text style={styles.title}>Meet the family</Text>
        <Text style={styles.link}>What we have in store for you.</Text>
        <Text style={styles.href}>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</Text>
    </View>

    <View style={styles.conainer}>
        <ImageBackground style={{width:"95%",
        height:450,marginLeft:'auto',borderTopLeftRadius: 20,
        borderTopRightRadius: 60}} source={require('../img/accessories.png')}>
<Text style={{
    marginTop:45,
    marginBottom:15,
    fontWeight: 400,
    fontSize:28,
    fontFamily:'sans-serif'
    }}>Accessories</Text>
<Text style={styles.SubText}>Accessories you didn't know you needed. </Text>
        </ImageBackground>
        
    </View>
    <View style={styles.conainer}>
    <ImageBackground style={{width:"95%",
        height:450,marginLeft:'auto'}} source={require('../img/2.png')}>
            <Text style={styles.Text}>Apparel</Text>
            <Text style={styles.SubText}>Check out our line of non-hiking clothes.</Text>
        </ImageBackground>
    </View>
    <View style={styles.conainer}>
        <ImageBackground style={{width:"95%",
        height:450,marginLeft:'auto',borderRadius:30}} source={require('../img/4.png')}>
            <Text style={styles.Text}>Climbing Gear</Text>
            <Text style={styles.SubText}>Climbing gear for every occasion.</Text>
        </ImageBackground>
    </View>
    <View style={styles.conainer}>
        <ImageBackground style={{width:"95%",
        height:450,marginLeft:'auto',borderRadius:30}} source={require('../img/5.png')}>
            <Text style={styles.Text}>Headwear</Text>
            <Text style={styles.SubText}>Our beanies are so comfy you won't believe it.</Text>
        </ImageBackground>
    </View>
    <View style={styles.conainer}>
        <ImageBackground style={{width:"95%",
        height:450,marginLeft:'auto',borderRadios:30}} source={require('../img/6.png')}>
            <Text style={styles.Text}>Hiking Gear</Text>
            <Text style={styles.SubText}>Desert or mountain? Doesn't matter.</Text>
        </ImageBackground>
    </View>
    <View style={styles.conainer}>
        <ImageBackground style={{width:"95%",
        height:450,marginLeft:'auto',}} source={require('../img/7.png')}>
            <Text style={styles.Text}>Jackets</Text>
            <Text style={styles.SubText}>Our jackets are perfect for every season.</Text>
        </ImageBackground>
    </View>
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
    conainer:{
        textAlign:'center',
        paddingTop:30,
        borderTopRadius: 20,
        borderBottomRadius: 20,
        

    },
    Text:{
            marginTop:45,
            marginBottom:15,
            fontWeight: 400,
            fontSize:28,
            fontFamily:'sans-serif'
    },
    SubText:{
        fontWeight: 400,
        fontSize: 16,
        fontFamily:'sans-serif'
    }

})
