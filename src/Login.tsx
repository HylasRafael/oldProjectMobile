import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react"
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image, Alert  } from "react-native"
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
        
    },

    Sucesso: {
		backgroundColor: '#ff9',
		color: '#990',
		padding: 20,
		marginBottom: 20,
		borderRadius: 5,
		fontSize: 16,
	},

    Erro: {
		backgroundColor: '#ff9',
		color: '#990',
		padding: 20,
		marginBottom: 20,
		borderRadius: 5,
		fontSize: 16,
	},
});

type Props = NativeStackScreenProps < StackParams,'Login'>;

const Login: React.FC <Props>  = (props) => {
    
    const [sucesso, setSucesso] = useState(false)
    const [erro, setErro] = useState(false)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')   

    
    const botaoLogin = () => {        
        
        if ((email === 'Admin') && (senha === '123')) {
            
            props.navigation.navigate('Produto')
        }
        else {
            setErro(true)
        }

        
        
    }

    const botaoCriarConta = () => {
        props.navigation.navigate('Cadastro')
    }

    
    const botaoRecuperarSenha = () => {
        props.navigation.navigate('RecuperarSenha')
    }


    return (
            <View style={styles.container}>

                {
                    sucesso && 
                    <Text style={styles.Sucesso}>Login Correto!</Text>
                }

                {
                    erro && 
                    <Text style={styles.Erro}>Login Incorreto!</Text>
                }



                <View>
                    <Image style={styles.Logo} source = {Logo} />
                </View>

                <TextInput style={styles.input} placeholder='E-Mail' onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder='Senha' onChangeText={setSenha}/>

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