import React from "react";  
import {TextInput, Button, Text, View, } from "react-native";

export default function LoginForm() {

    return (
        <View>
            <Text>Una vista de un componente retornable como los envases</Text>
            <TextInput placeholder="Que te parece el retornable"/>
            <TextInput placeholder="Una chulada no?"/>
        </View>
    );
}
