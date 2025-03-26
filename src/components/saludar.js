import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
    const {name} = props

    return (<Text>Hola {name}</Text>);
    
}

Saludar.defaultProps= {
    name: "persona",
};

Saludar.PropTypes= {
    name: PropTypes.string.isRequired ,
};  