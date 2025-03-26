import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen(props) {

  const Stack = createStackNavigator(props);
      const {navigation} = props;
  
      const goToPage = () => {
  
          navigation.navigate("Setting")
      };

  return (
    <SafeAreaView>
      <Text>Estamos en el home screen</Text>
      <Text>Estamos en el home screen</Text>
      <Text>Estamos en el home screen</Text>
      <Text>Estamos en el home screen</Text>
      <Text>Estamos en el home screen</Text>
      <Text>Estamos en el home screen</Text>
      <Button title='Ir a setings' onPress={goToPage}/>
    </SafeAreaView>
  ) 
}