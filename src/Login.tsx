import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react"
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image  } from "react-native"
import { StackParams } from "../App";
import Logo from '../assets/Logo.png';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EAE5DB',
    },

    Logo: {
        width:400,
        height:150,
        marginTop:10,
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

    recSenha:{
        display:'flex',
        alignContent: 'flex-end',
        fontWeight: 'bold'
    },

    containerBotao:{        
        margin: 10,
        alignItems: 'center',
    },

    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 30,              
        backgroundColor: '#FF5E14',
        borderRadius: 8,
    },

    button1:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,              
        backgroundColor: '#6EB8B3',
        borderRadius: 15,
    },

    texto:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        
    }
});

type Props = NativeStackScreenProps < StackParams,'Login'>;

const Login: React.FC <Props>  = (props) => {    

    const botaoCriarConta = () => {
        props.navigation.navigate('Cadastro')
    }

    const botaoLogin = () => {
        props.navigation.navigate('Produto')
    }
    
    const botaoRecuperarSenha = () => {
        props.navigation.navigate('RecuperarSenha')
    }


    return (
            <View style={styles.container}>

                <View>
                    <Image style={styles.Logo} source = {Logo} />
                </View>

                <TextInput style={styles.input} placeholder='E-Mail'/>
                <TextInput style={styles.input} placeholder='Senha'/>

                <View>
                    <TouchableOpacity style ={styles.recSenha} onPress={ botaoRecuperarSenha }>Esqueci Minha Senha</TouchableOpacity>
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button1} onPress={ botaoLogin } >
                    <Text style={styles.texto} >LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoCriarConta } >
                    <Text style={styles.texto} >CRIAR CONTA</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
}

export default Login