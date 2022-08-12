import React from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native";
import Logo1  from '../assets/Logo-JS.png';

const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        alignItems: 'center',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EAE5DB',

    },

    containerImagem:{
        backgroundColor: '#FFFFFF'

    },

    Image: {
        width:400,
        height:150,
        marginTop:10,
        
        
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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

const TelaLance: React.FC = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Titulo do Produto</Text>

                <View style={styles.containerImagem}>
                    <Image style={styles.Image} source = {Logo1} />                    
                </View>

                <Text>Descrição do Produto!</Text>

                <View>
                    <Text>Valor do Lance Atual</Text>
                    <TextInput style={styles.input}/> 
                </View>

                <View >
                    <Text>Seu Lance</Text>
                    <TextInput style={styles.input}/> 
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ () => {} } >
                    <Text style={styles.texto} >DAR LANCE</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}

export default TelaLance