import React from "react"
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import Logo from '../assets/Logo.png';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EEEEEE',

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

const NovaSenha: React.FC = () => {
    return (
            <View style={styles.container}>
                
                <View>
                    <Image style={styles.Logo} source = {Logo} />                    
                </View>

                <View style={styles.textoSenha}>
                    <Text>Código de Verificação</Text>
                    <TextInput style={styles.input} placeholder='Digite o Código aqui'/>
                    <Text>Crie a Nova Senha</Text>
                    <TextInput style={styles.input} placeholder='Senha'/>
                    <TextInput style={styles.input} placeholder='Confirmar Senha'/>
                </View>
                
                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ () => {} } >
                    <Text style={styles.texto} >Criar Conta</Text>
                    </TouchableOpacity>
                </View>

            </View>
            

            
        )
}

export default NovaSenha