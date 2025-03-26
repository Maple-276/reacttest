import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import HomeScreen from '../screens/HomeScreen2';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component= {HomeScreen}/>
        <Tab.Screen name="Setting" component= {SettingsScreen}/>
        

    </Tab.Navigator>
  )
}