import React from 'react'
import {Text, Image, StyleSheet, View} from 'react-native'

export default props =>(
    <View>
        <Image style={{ 
            marginBottom: 10,
            width: '100%',
            height: 120,
        }}
        source={require('../assets/img/designer.png')}/>

        <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 10}}>
            {props.nome}
        </Text>
        <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 10}}>
            {props.description}
        </Text>
    </View>    
)