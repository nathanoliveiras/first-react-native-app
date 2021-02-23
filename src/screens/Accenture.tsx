import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import{ Feather } from '@expo/vector-icons'

import AccentureLogo from '../img/Accenture.png'

export default function Accenture(){
  return (
      <View style={styles.container}>
          <Image
            style={styles.logo}
            source={AccentureLogo}
            width={60}
            height={235}
          />
        <Text style={styles.title}>Accenture</Text>
        <Text style={styles.paragraph}>Texto complementar</Text>

        <RectButton 
            style={styles.contactButton}
            onPress={() => alert('Olá')}>
            <Text style={styles.textButton}>Entre em contato</Text>
            <Feather name="send" size={20}/>
        </RectButton>
      </View> 
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1
    },
    logo:{
        marginBottom: 20
    },
    title:{
        fontSize: 24,
        marginBottom: 24,
        textAlign:'center',
        color: '#8f8f8f'
    },
    paragraph:{
        fontSize: 18,
        textAlign: 'left',
        color:'#b8b8b8'
    },
    contactButton:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#a100ff',
        marginTop: 20
    },
    textButton:{
       color:'#a100ff',
       fontSize: 18, 
    }
})
