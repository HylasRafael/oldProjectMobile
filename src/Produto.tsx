import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';
import Produto from "./model/Produto";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EAE5DB', 
    },

    titulo:{
        fontSize: 19,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',        
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

    card:{
        width: 400,
        marginTop:5,
        borderColor: 'black',
        borderRadius:10,
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
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


const ProdutoScreen: React.FC <Props> = (props) => {

    const [produto, setProduto] = useState<Produto>({
        id: 1,
        nome: 'Raveo Vitrola com USB' ,
        preco: 100,
        descricao: 'A vitrola Raveo Sonetto Wood é uma edição mais que especial, toda em madeira que proporciona momentos incríveis!',
        imagem: 'https://m.media-amazon.com/images/I/61FkEZJAToL._AC_SX679_.jpg'
    })
    

    const botaoEntrarNoLeilao = () => {
        props.navigation.navigate('TelaLance')
    }

    return (
            <View style={styles.container}>
                <Image style={styles.logo} source = {Logo1} />

                <View style={styles.card}>
                    <Text style={styles.titulo}>{produto.nome}</Text>
                    <View>
                        <Image style={styles.fotoProduto} resizeMode='contain' source={{uri: produto.imagem}} />
                        <Text>{produto.descricao}</Text>
                    </View>
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoEntrarNoLeilao } >
                    <Text style={styles.texto}>LEILÃO</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}

export default ProdutoScreen