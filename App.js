import { StatusBar } from 'expo-status-bar';
import React, {Fragment, useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';
import Footer from './app/src/components/footer';
import Resultado from './app/src/components/resultado';
import DetalleImc from './app/src/components/detalleimc';


export default function App() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [tipoMedida, setTipoMedida] = useState(null);
  const [resultado, setResultado] = useState({
    peso: null,
    altura: null,
    tipoMedida: null,
    imc: null,
  });
  const calcular = () =>{
    console.log("peso =>", peso);
    console.log("altura =>", altura);
    console.log("tipo Medida =>", tipoMedida);
    if(!tipoMedida){
      console.log("seleccione tipo de medida");
    } else if(!peso){
      console.log("ingrese peso");
    }  else if(!altura){
      console.log("ingrese altura");
    } else{
      console.log("OK");
    }
    const alt = altura/100;
    const calcularIMCKC = peso / (alt*alt);
    const calcularIMCLP = (peso / (alt*alt))*703;
    console.log(calcularIMCKC.toFixed(2));
    console.log(calcularIMCLP.toFixed(2));
    setResultado({
      peso: peso,
      altura: alt,
      imc: calcularIMCKC.toFixed(2),
    })
  }
  return (
    <Fragment>
      <View style={styles.containerTitulo}>
        <Text style={styles.textTitulo}>CALCULADORA DE IMC</Text>
        
      </View>
      <View style={styles.containerForm}>
        <Formulario setPeso={setPeso} setAltura={setAltura} setTipoMedida={setTipoMedida}/>
      </View>
      <View>
        {/* <Button title = "Calcular" onPress={calcular}/> */}
      </View>
      <Resultado setResultado={resultado}></Resultado>
      <DetalleImc></DetalleImc>
      <Footer calcular={calcular}/>
    </Fragment>  
  );
}

const styles = StyleSheet.create({
  containerTitulo: {
    backgroundColor: colores.COLOR_PRIMARIO,
    height: 100,
    alignItems: 'center'
  },
  textTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 25
  },
  containerForm: {
    marginTop: 25,
    backgroundColor: colores.COLOR_OSCURO,
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
});
