import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react"
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { StackParams } from "../App";
import Logo from '../assets/Logo.png';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
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
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#DCDCDC',
        
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
        backgroundColor: '#666666',
        borderRadius: 4,
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

const RecuperarSenha: React.FC <Props> = (props) => {

    const botaoEnviar = () => {
        props.navigation.navigate('NovaSenha')
    }
    
    return (
            <View style={styles.container}>
                
                <View>
                    <Image style={styles.Logo} source = {Logo} />                    
                </View>

                <View style={styles.textoSenha}>
                    <Text>RECUPERE SUA SENHA</Text>
                </View>
                         
                <TextInput style={styles.input} placeholder='Nome' />
                           
                <TextInput style={styles.input} placeholder='Sobrenome'/>
                          
                <TextInput style={styles.input} placeholder='CPF' />
                
                <TextInput style={styles.input} placeholder='E-Mail'/>
                
                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoEnviar } >
                    <Text style={styles.texto} >ENVIAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
            

            
        )
}

export default RecuperarSenha