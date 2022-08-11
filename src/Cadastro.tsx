import React from "react"
import { TextInput, View, Text, TouchableOpacity, StyleSheet,  } from "react-native"

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EEEEEE',

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

const Cadastro: React.FC = () => {
    return (
            <View style={styles.container}>
                         
                <TextInput style={styles.input} placeholder='Nome' />
                           
                <TextInput style={styles.input} placeholder='Sobrenome'/>
                          
                <TextInput style={styles.input} placeholder='CPF' />
                
                <TextInput style={styles.input} placeholder='E-Mail'/>
                
                <TextInput style={styles.input} placeholder='Senha'/>
                
                <TextInput style={styles.input} placeholder='Confirmar Senha'/>
                
                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ () => {} } >
                    <Text style={styles.texto} >Criar Conta</Text>
                    </TouchableOpacity>
                </View>

            </View>
            

            
        )
}

export default Cadastro