import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';
import Vitrola from '../assets/vitrola.jpg';

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
        fontSize: 24,

    },

    logo: {
        width: 400,
        height: 150,
        
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

    fotoProduto: {
        width: 300,
        height: 300,
        margin: 10,

    },

    //imagem

    button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 180,
            height: 30,              
            backgroundColor: '#FF5E14',
            borderRadius: 8,

    },

    buttonCadastrar:{
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

type Item = {
	id?: number
	nome: string
	descricao: string
    preco: number
}



axios.get<Item[]>('http://10.60.46.43:4000/produtos')
		.then(res => console.log(res.data))
		.catch((res) => console.log(res.data))

const Produto: React.FC <Props> = (props) => {

    const botaoEntrarNoLeilao = () => {
        props.navigation.navigate('TelaLance')
    }

    const botaoCadastrar = () => {
        props.navigation.navigate('CadastroProduto')
    }

    return (
            <View style={styles.container}>
                <Image style={styles.logo} source = {Logo1} />

                <View>
                    <Text style={styles.titulo}>Seu Produto Aqui!</Text>
                    <Text>Descrição Aqui!</Text>
                    <View>
                        <Image style={styles.fotoProduto} source={Vitrola} />
                    </View>   
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