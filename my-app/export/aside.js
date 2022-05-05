import React from 'react';
import { StyleSheet,SafeAreaView,Text,ImageBackground,View,Image } from 'react-native';

export default function Aside () {
    return (
        <SafeAreaView style={style.aside}>
            <Text style={{color:'#E6B939',fontFamily:'sans-serif',fontSize:15}}>Buyer's guides</Text>
            <Text style={style.bigText}>Navigating our offering.</Text>
            <Text style={style.text}>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</Text>
            <View>
                
                <Image style={style.img} source={require('../img/alpinist.png')}/>
                <View>
                    <Text style={style.imgText}>3 climbing accessories for the climber that has everything</Text>
                    <View style={{flexDirection:'row'}}>
                <Image style={style.subImg} source={require('../img/ava1.png')}/>
                <View>
                    <Text style={style.avaText}>Alex Jenna</Text>
                    <Text style={style.avaSubText}>QA</Text>
                    
                    </View>
                    <View style={{marginLeft:'45%'}}><Text>October 18, 2021</Text></View>
                    </View>
                
                </View>
                <Image style={style.img} source={require('../img/bike.png')}/>
                <View>
                    <Text style={style.imgText}>Biking accessories for the beaten path</Text>




                <View style={{flexDirection:'row'}}>
                <Image style={style.subImg} source={require('../img/ava2.png')}/>
                <View>
                    <Text style={style.avaText}>Alex Jenna</Text>
                    <Text style={style.avaSubText}>QA</Text>
                    </View>
                    
                    <View style={{marginLeft:'45%'}}><Text>October 18, 2021</Text></View>
                    </View>
                    </View>
                </View>    
        </SafeAreaView>
    )
}

const style=StyleSheet.create({
    aside:{
        width:'100%',
        height:850,
        marginTop:'110%',
        fontFamily:'sans-serif'
    },
    bigText:{
        fontFamily:'sans-serif',
        fontSize:25,
        marginTop:10,
        marginBottom:10,
    },
    text:{
        fontFamily:'sans-serif',
        fontSize:15
    },
    img:{
        width:'100%',
        height:250,
        borderRadius:15,
        marginTop:25
    },
    imgText:{

    },
    subImg:{
        width:35,height:35
    },
    avaText:{
        flexDirection:'column'
    }
})