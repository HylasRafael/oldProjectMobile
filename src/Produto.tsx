import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';
import fotoProduto from '../assets/vitrola.jpg';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EAE5DB',
        alignItems: 'center',

    },

    titulo: {
        fontWeight: 'bold',

    },

    logo: {
        width: 400,
        height: 150,
        marginTop: 10,
        
    },

    containerBotao:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,              
        backgroundColor: '#666666',
        borderRadius: 4,
    },

    button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 180,
            height: 30,              
            backgroundColor: '#FF5E14',
            borderRadius: 8,

    },

    texto:{        
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

type Props = NativeStackScreenProps < StackParams,'Produto'>;

const Produto: React.FC <Props> = (props) => {

    const botaoEntrarNoLeilao = () => {
        props.navigation.navigate('TelaLance')
    }

    return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Seu Produto Aqui!</Text>

                <View>
                    <Image style={styles.logo} source = {Logo1} />
                    <Text>Descrição Aqui!</Text>
                </View>   

                <View>
                    <Image style={styles.fotoProduto} source={fotoProduto} />
                </View>            

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoEntrarNoLeilao } >
                    <Text style={styles.texto} >LEILÃO</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}

export default Produto