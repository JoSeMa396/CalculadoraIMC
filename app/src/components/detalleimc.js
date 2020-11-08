import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import colores from '../utils/colores';

export default function Resultado(props) {
    return (
        <View style={estilo.row}>
            <Text>Por debajo de 18.5 : 	Bajo peso</Text>
            <Text>	18.5 a 24.9 : 	Normal</Text>
            <Text>	25.0 a 29.9 : 	Sobrepeso</Text>
            <Text>	30 o más : 	Obeso</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    row: {
        // flexDirection: "row",
        borderTopWidth: 2,
    },
    
})