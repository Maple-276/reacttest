import 'react-native-gesture-handler';
import React, {useState} from 'react';	
import {View, Text, Button, StyleSheet} from 'react-native';
import LoginForm from './src/components/login'
import Saludar from './src/components/saludar'
import { NavigationContainer } from '@react-navigation/native';
// import NavigationStack from './src/navigation/NavigationStack';
// import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

const App = () => {
	
	return (

		<NavigationContainer>
			<NavigationDrawer/>
		</NavigationContainer>
	
				
		


			
	);		
};
	
const styles = StyleSheet.create({
	container:{
		flex: 10,
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	
	text:{
		fontSize: 20,
		marginBotton: 6,
		
	},

});

export default App;
	