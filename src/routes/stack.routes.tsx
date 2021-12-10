import React from 'react'
import { View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {



    return (
       <Navigator>
           <Screen name='MovieDetails' component={} />
       </Navigator>
    )
}
