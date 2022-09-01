import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";
import { StackParams } from "../App";
import CountDown from 'react-native-countdown-component'
import Produto from "./model/Produto";
import Leilao from "./model/Leilao";


const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        alignItems: 'center',
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#EAE5DB',
        

    },

    card:{
        width: 400,
        marginTop:5,
        borderColor: 'black',
        borderRadius:10,
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
    },

    imageContainer:{
        width:400,
        height:400,
    },

    image: {
        flex: 1,
    },

    input: {
        margin: 8,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        
    },

    containerBotao:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,              
        backgroundColor: '#6EB8B3',
        borderRadius: 4,
        
    },

    texto:{  
        textAlign: 'center',      
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

    titulo:{        
        fontSize: 19,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        
    },
    
    timerTitulo:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,        
    },

    timer:{
        display:'flex',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },   
    
});

type Props = NativeStackScreenProps < StackParams,'TelaLance'>;

const TelaLance: React.FC<Props> = (props) => {
    
    const [lanceEnviado, setLanceEnviado] = useState('');

    

    const botaoDarLance = () => {
        alert ('Seu lançe foi registrado no valor de R$' + lanceEnviado)
         
    }

    const [leilao, setLeilao] = useState<Leilao>({
		id: 1,
		id_produto: 3,
		preco_minimo: 100,
		inicio: new Date("2022-08-25-00:00:000+3"),
		termino: new Date("2022-08-30-00:00:000+3"),
	});
    
    const [produto, setProduto] = useState<Produto>({
        id: 1,
        nome: 'Raveo Vitrola com USB' ,
        preco: 100,
        descricao: 'A vitrola Raveo Sonetto Wood é uma edição mais que especial, toda em madeira que proporciona momentos incríveis!',
        imagem: 'https://m.media-amazon.com/images/I/61FkEZJAToL._AC_SX679_.jpg'
    })

    const segundosFaltantes = useMemo(() => {
        return 60 //leilao.termino.getTime() - (new Date().getTime());
    }, [leilao]);

    return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{produto.nome}</Text>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode='contain' source={{uri: produto.imagem}} />
                    </View>
                    <Text>{produto.descricao}</Text>           
                </View>

                <Text style={styles.texto}>Ultimo lance foi realizado na data 'x' no valor de: </Text>
                <Text style={styles.texto}>R${lanceEnviado}</Text>

                <View style={styles.timer}>                    
                    
                    
                    <Text style={styles.texto}>Leilão Termina em:</Text>
                    <CountDown until={segundosFaltantes}
                        timeToShow={['D', 'H', 'M', 'S']}
                        timeLabels={{d: 'Dias', h: 'Horas', m: 'Minutos', s: 'Segundos'}}
                        onFinish={() => alert('Terminado!')}

                        //pegar a hora atual e subitrair do total estipulado
                        
                    />
                    
                </View>

                <View >
                    <Text style={styles.texto}>Seu Lance</Text>
                    <TextInput style={styles.input} onChangeText={setLanceEnviado}/> 
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoDarLance } >
                    <Text style={styles.texto} >DAR LANCE</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}



export default TelaLance
