import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import colores from '../utils/colores';

export default function Resultado(props) {
    const {setResultado} = props;
    return (
        <View style={estilo.footer}>
            <Text>RESULTADO</Text>
            <View>
                <Text>PESO:</Text>
                <Text>
                    {setResultado.peso ? setResultado.peso: ''}
                </Text>
            </View>
            <View>
                <Text>ALTURA:</Text>
                <Text>
                    {setResultado.altura ? setResultado.altura: ''}
                </Text>
            </View>
            <View>
                <Text>INDICE DE MASA CORPORAL:</Text>
                <Text>
                    {setResultado.imc ? setResultado.imc: ''}
                </Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    
    
})