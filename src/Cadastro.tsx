import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react"
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
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

    logo: {
        width:400,
        height:150,
        marginTop:10,
    },

    containerLogo:{
        display: 'flex',
        justifyContent: 'center',
    },

    titulo:{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 2},
        textShadowRadius:1,
        color: '#ff8c00',
        
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

    texto:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

type Props = NativeStackScreenProps < StackParams,'Cadastro'>;

const Cadastro: React.FC <Props> = (props) => {

                const [nome, setNome] = useState ('')
                const [email, setEmail] = useState ('')
                const [senha, setSenha] = useState ('')
                const [ConfirmaSenha, setConfirmaSenha] = useState ('')
                const [cpf, setCPF] = useState ('')
                const [admin, setAdmin] = useState ('') 
                const [sobrenome, setSobreNome] = useState ('')
                const [id, setId] = useState ('')
            
                const botaoCadastro = () => {   
                    const usuario = { 
                        nome: nome,
                        email: email,
                        senha: senha,
                        confirmasenha: ConfirmaSenha,
                        cpf: cpf,
                        admin: admin,
                        sobrenome: sobrenome,
                        id: id,
                    }
                
            
                    axios.post('http://10.60.46.43:4000/usuarios', usuario)
                            .then(res => {
                                if (res.status == 201) {
                                    alert ('Usuário Cadastrado')
                                    props.navigation.navigate('Login')
                                }
            
                                else {
                                    alert ('Tente novamente')
                                }
                            })
                            .catch((res) => console.log(res))

                        
         }
        
            
    return (
            <View style={styles.container}>

                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source = {Logo} />
                </View>

                <Text style={styles.titulo}>CRIE SUA CONTA</Text>

                <TextInput style={styles.input} placeholder='Nome'onChangeText={setNome} />

                <TextInput style={styles.input} placeholder='Sobrenome'onChangeText={setSobreNome}/>

                <TextInput style={styles.input} placeholder='CPF'onChangeText={setCPF} />

                <TextInput style={styles.input} placeholder='E-Mail'onChangeText={setEmail}/>

                <TextInput style={styles.input} placeholder='Senha'onChangeText={setSenha}/>

                <TextInput style={styles.input} placeholder='Confirmar Senha'onChangeText={setConfirmaSenha}/>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoCadastro } >
                    <Text style={styles.texto} >CRIAR CONTA</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
}

export default Cadastro


