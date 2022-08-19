import React from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
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
        color: '#FF5E14',
        fontWeight: 'bold',
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

    const botaoCadastrar = () => {
        props.navigation.navigate('Login')
    }

    return (
            <View style={styles.container}>

                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source = {Logo} />
                </View>

                <Text style={styles.titulo}>CRIE SUA CONTA</Text>

                <TextInput style={styles.input} placeholder='Nome' />

                <TextInput style={styles.input} placeholder='Sobrenome'/>

                <TextInput style={styles.input} placeholder='CPF' />

                <TextInput style={styles.input} placeholder='E-Mail'/>

                <TextInput style={styles.input} placeholder='Senha'/>

                <TextInput style={styles.input} placeholder='Confirmar Senha'/>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoCadastrar } >
                    <Text style={styles.texto} >CRIAR CONTA</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
}

export default Cadastro