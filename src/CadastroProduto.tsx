import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native";
import { StackParams } from "../App";
import Logo1  from '../assets/Logo.png';
import logo from '../assets/Logo-JS.png';

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

const CadastroProduto: React.FC <Props> = (props) => {

    const botaoCadastrar = () => {
        alert ('Produto Cadastrado')
        props.navigation.navigate('Produto')
    }

    return (
            <View style={styles.container}>
                <Image style={styles.logo} source = {Logo1} />


                <View>
                    <Text style={styles.titulo}>Seu Produto Aqui!</Text> {/*Descrição sera lançada para o backend*/} 
                    <View>
                        <Image style={styles.fotoProduto} source={logo} /> {/*Foto será colocada para o back end*/}
                    </View>
                    <Text>Descrição Aqui!</Text> {/*Descrição será lançada para o backend */}
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