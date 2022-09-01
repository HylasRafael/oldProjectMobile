import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {SafeAreaView, TextInput, View, Text, TouchableOpacity, StyleSheet, Image, Alert, TextInputComponent, } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';
import CountDown from 'react-native-countdown-component'


const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        alignItems: 'center',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EAE5DB',
        

    },

    image: {
        
        width:400,
        height:130,
        marginTop:5,
        borderColor: 'black',
        borderRadius:10,
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#ecf0f1', 
        
        
        
    },

    input: {
        margin: 8,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        
    },

    containerBotao:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,              
        backgroundColor: '#6EB8B3',
        borderRadius: 4,
        
    },

    texto:{  
        textAlign: 'center',      
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

    titulo:{        
        fontSize: 19,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        
    },
    
    timerTitulo:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,        
    },

    timer:{
        display:'flex',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },   
    
});

type Props = NativeStackScreenProps < StackParams,'TelaLance'>;

const TelaLance: React.FC<Props> = (props) => {
    
    const [lanceEnviado, setLanceEnviado] = useState('');
    

    const botaoDarLance = () => {
        alert ('Seu lançe foi registrado no valor de R$' + lanceEnviado)
         
    }

   

    return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Titulo do Produto</Text>

                <View style={styles.containerImagem}>
                    <Image style={styles.image} source = {Logo1} />
                    <View>
                        <Text>Descrição do Produto!</Text>
                    </View>                  
                </View>

                <Text style={styles.texto}>Ultimo lance foi realizado na data 'x' no valor de: </Text>
                <Text style={styles.texto}>R${lanceEnviado}</Text>

                <View style={styles.timer}>                    
                    
                    
                    <Text style={styles.texto}>Leilão Termina em:</Text>
                    <CountDown until={60}
                        timeToShow={['D', 'H', 'M', 'S']}
                        timeLabels={{d: 'Dias', h: 'Horas', m: 'Minutos', s: 'Segundos'}}
                        onFinish={() => alert('Terminado!')}

                        //pegar a hora atual e subitrair do total estipulado
                        
                    />
                    
                </View>

                <View >
                    <Text style={styles.texto}>Seu Lance</Text>
                    <TextInput style={styles.input} onChangeText={setLanceEnviado}/> 
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoDarLance } >
                    <Text style={styles.texto} >DAR LANCE</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}



export default TelaLance
