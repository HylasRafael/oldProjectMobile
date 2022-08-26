import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput  } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';

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

    input: {
        margin: 8,
        width: 290,
        height: 30, 
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },

    inputDescricao: {
        margin: 8,
        width: 290,
        height: 100, 
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        textAlign: 'left',

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
        width: 400,
        height: 150,
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

    texto:{        
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

type Props = NativeStackScreenProps < StackParams,'Produto'>;

const [nome, setNome] = useState ('')

const CadastroProduto: React.FC <Props> = (props) => {

    

    const botaoCadastrar = () => {   
        const item = { 
            nome: nome,
            descricao: 'xxx',
            preco: 1253,
        }

        axios.post('http://10.60.46.43:4000/produtos', item)
                .then(res => {
                    if (res.status == 201) {
                        alert ('Produto Cadastrado')
                        props.navigation.navigate('Produto')
                    }

                    else {
                        alert ('Tente novamente')
                    }
                })
                .catch((res) => console.log(res))
    }

    return (
            <View style={styles.container}>
                <Image style={styles.logo} source = {Logo1} />


                <View>
                    <TextInput style={styles.input} placeholder='Nome do Produto' onChangeText={setNome}/>
                    <TextInput style={styles.input} placeholder='Preço'/>
                    {/* Inserir botão para carregar imagem */}
                    <TextInput style={styles.inputDescricao} placeholder='Descrição do Produto'/>
                </View>   

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoCadastrar } >
                    <Text style={styles.texto} >CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}

export default CadastroProduto