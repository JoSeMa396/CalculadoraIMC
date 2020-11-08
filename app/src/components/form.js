import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colores from '../utils/colores';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props) {
    // console.log("Props=>", props);
    const {setTipoMedida, setPeso, setAltura} = props;
    return (
        <View style = {estilo.formulario}>
            <RNPickerSelect
                onValueChange={(value) => setTipoMedida(value)}
                items={[
                    { label: 'KILOGRAMOS/CENTIMEROS', value: '0' },
                    { label: 'LIBRAS/PULGADAS', value: '1' },
                ]}
            />
            <TextInput
                style = {estilo.input}
                placeholder = "Ingrese el peso"
                onChange={(e) => setPeso(e.nativeEvent.text)}
            />
            <TextInput
                style = {estilo.input}
                placeholder = "Ingrese la altura"
                onChange={(e) => setAltura(e.nativeEvent.text)}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    formulario: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colores.COLOR_OSCURO,
        borderRadius: 20,
        height: 100,
        justifyContent: "center"
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        width: "50%",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    }
})