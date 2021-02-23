import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Accenture from './screens/Accenture'

import Header from './components/Header'

const { Navigator, Screen } = createStackNavigator()

export default function Route() {
    return (
        <NavigationContainer>
            <Navigator>
                screenOptions={{headerShown: false, cardStyle:{backgroundColor:'#f2f2f2'}}}
                <Screen
                    name="home"
                    component={Home}
                />
                <Screen
                    name="Accenture"
                    component={Accenture}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Accenture"/>
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}