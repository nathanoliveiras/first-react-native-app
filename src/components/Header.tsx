import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderProps } from '../interfaces'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, showCancel = true }: HeaderProps) {
    const navigation = useNavigation();

    function handleClose() {
        navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <BorderlessButton
                onPress={navigation.goBack}
            >
                <Feather name="arrow-left" size={20} color="#a100ff" />
            </BorderlessButton>

            <Text style={styles.title}>Header</Text>
            {showCancel ? (
                <BorderlessButton
                    onPress={handleClose}
                >
                    <Feather name="x" size={20} color="#a100ff" />
                </BorderlessButton>
            )
                : (
                    <View></View>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#797979',
        fontSize: 18
    }
})