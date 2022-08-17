import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react"
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

    containerBotao:{        
        margin: 10,
        alignItems: 'center',
                       
    },

    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,              
        backgroundColor: '#224A49',
        borderRadius: 8,
    },

    texto:{        
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    
});

type Props = NativeStackScreenProps < StackParams,'NovaSenha'>;

const NovaSenha: React.FC <Props> = (props) => {

    const botaoRedefinir = () => {
        props.navigation.navigate('Login')
    }

    return (
            <View style={styles.container}>
                
                <View>
                    <Image style={styles.Logo} source = {Logo} />                    
                </View>

                <View style={styles.textoSenha}>
                    <Text>CÓDIGO DE VERIFICAÇÃO</Text>
                    <TextInput style={styles.input} placeholder='Digite o Código aqui'/>
                    <Text>CRIE NOVA SENHA</Text>
                    <TextInput style={styles.input} placeholder='Senha'/>
                    <TextInput style={styles.input} placeholder='Confirmar Senha'/>
                </View>
                
                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoRedefinir } >
                    <Text style={styles.texto} >REDEFINIR</Text>
                    </TouchableOpacity>
                </View>

            </View>
            

            
        )
}

export default NovaSenha