import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';
import Produto from "./model/Produto";
import Produtos from "./services/Produtos";

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
        height: 350,
        marginLeft: 45,  
        
        
    },

    card:{
        width: 400,
        marginTop:2,
        borderColor: 'black',
        borderRadius:10,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',       
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

type Props = NativeStackScreenProps <StackParams,'Produto'>;


const ProdutoScreen: React.FC<Props> = (props) => {

    /*
    ler: (id: number, callback: (produto?: Produto) => void) => {
        axios.get<Produto>(`'http://10.60.46.43:4000/produtos'${id}`)
        .then((resp) => {
            const produtoItem: Produto = resp.data
            callback(produtoItem)
    */

    useEffect (() => {

    })

    const [produto, setProduto] = useState<Produto>({
        id: 1,
        nome: 'JOHNSON’S STORE ANTIGUIDADES' ,
        preco: 100,
        descricao: 'Participe agora do melhor leilão de produtos antigos da região!',
        imagem: 'data:image/jpeg;base64,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'
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