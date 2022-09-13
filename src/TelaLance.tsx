import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useMemo, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";
import { StackParams } from "../App";
import CountDown from 'react-native-countdown-component'
import Produto from "./model/Produto";
import Leilao from "./model/Leilao";
import LeiloesService from "./services/Leiloes";
import ProdutosService from "./services/Produtos";
import Lance from "./model/Lance";
import axios, { AxiosRequestConfig } from "axios";
import Api from "./services/Api";
import CurrencyInput from "react-native-currency-input";


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

    disabledTexto: {
        textAlign: 'center',      
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#6E9893',
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
    const [estaCarregando, setEstaCarregando] = useState(false);
    
    const [lanceMaisAlto, setLanceMaisAlto] = useState<Lance>();

    const [novoLance, setNovoLance] = useState(0);


    const botaoDarLance = () => {
        const Lance = {            
            id_leilao: leilao?.id,
            id_usuario: 17,
            preco: novoLance,   
        };

        const config: AxiosRequestConfig = {
            headers: {
                token: '17'
            }
        }
    
        Api.post('/lances', Lance, config)
        .then(res => {
            if (res.status === 201) {
                alert ('Lance Enviado')
                LeiloesService.lerLanceMaisAlto(leilao?.id!)
                .then((lance) => {
                    setLanceMaisAlto(lance)
                    setNovoLance(0)
                })
                .catch((erro) => {
                    alert (erro)
                });
            }

            else {
                alert ('ERRO#3: Tente novamente')
            }
        })
        .catch((erro) => {
            alert ('ERRO#4: Tente novamente')
        })
    }      
        
        /* alert ('Seu lançe foi registrado no valor de R$' + lanceEnviado) */
         
    

    const [leilao, setLeilao] = useState<Leilao>();
    
    const [produto, setProduto] = useState<Produto>()

    const segundosFaltantes = useMemo(() => {
        const agoraMilisegundos = new Date().getTime();
        const terminoMilisegundos = leilao?.termino.getTime() ?? agoraMilisegundos;
        const milisegundosFaltantes = terminoMilisegundos - agoraMilisegundos;
        return milisegundosFaltantes/1000 ;
    }, [leilao]);

    useEffect(() => {
        setEstaCarregando(true);
        LeiloesService.lerAtivo()
        .then(leilao => {
            setLeilao(leilao)
            ProdutosService.ler(leilao.id_produto)
            .then(produto => {
                setProduto(produto);
            })
            .catch(error => {
                alert(error);
            })
            .finally(() => {
                setEstaCarregando(false);
            });

            if (leilao.id) {
                LeiloesService.lerLanceMaisAlto(leilao.id)
                .then((lance) => {
                    setLanceMaisAlto(lance)
                })
                .catch((error) => {
                    //TODO: Mostrar mensagem de erro.
                })
            }
        })
        .catch(error => {
            alert(error);
        })
        .finally(() => {
            setEstaCarregando(false);
        });
    }, []);

    const botaoDisabled = useMemo(() => {
        return (novoLance <= (lanceMaisAlto?.preco ?? 0))
    }, [novoLance, lanceMaisAlto]);

    return (
            <View style={styles.container}>
                {(estaCarregando) && (
                    <Text>Carregando...</Text>
                )}
                <Text style={styles.titulo}>{produto?.nome} (id={leilao?.id})</Text>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode='contain' source={{uri: produto?.imagem}} />
                    </View>
                    <Text>{produto?.descricao}</Text>
                </View>

                <Text style={styles.texto}>Ultimo lance foi realizado na data {(lanceMaisAlto) ? (lanceMaisAlto?.tempo?.toDateString()) : (leilao?.inicio.toDateString())} no valor de:</Text>
                <Text style={styles.texto}>R${(lanceMaisAlto) ? (lanceMaisAlto?.preco) : (leilao?.preco_minimo)}</Text>

                <View style={styles.timer}>                    
                    
                    
                    <Text style={styles.texto}>Leilão Termina em: ({leilao?.termino.toDateString()})</Text>
                    {(segundosFaltantes) && (
                        <CountDown until={segundosFaltantes}
                            timeToShow={['D', 'H', 'M', 'S']}
                            timeLabels={{d: 'Dias', h: 'Horas', m: 'Minutos', s: 'Segundos'}}
                            onFinish={() => alert('Terminado!')}
                        />
                    )}
                    
                    
                </View>

                <View >
                    <Text style={styles.texto}>Seu Lance {novoLance}</Text>
                    <CurrencyInput style={styles.input} value={Number(novoLance)} onChangeValue={setNovoLance}></CurrencyInput>
                    {/*<TextInput style={styles.input} value={novoLance} onChangeText={setNovoLance} /> */}
                </View>

                <View style={styles.containerBotao} >
                    <TouchableOpacity style={styles.button} onPress={ botaoDarLance } disabled={botaoDisabled}>
                    <Text style={botaoDisabled ? styles.disabledTexto : styles.texto} >DAR LANCE</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}



export default TelaLance
