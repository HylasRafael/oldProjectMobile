import Lance from "../model/Lance";
import Leilao from "../model/Leilao";
import Api from "./Api";

const LeiloesService = {
    lerAtivo: () => {
        return new Promise<Leilao>((resolve, reject) => {
            Api.get('/leiloes/ativo')
            .then(response => {
                if (response.status === 200) {
                    const leilao: Leilao = {
                        id_produto: response.data.id_produto,
                        preco_minimo: response.data.preco_minimo,
                        inicio: new Date(response.data.inicio),
                        termino: new Date(response.data.termino),
                        lance_arremate: response.data.lance_arremate,
                    }
                    resolve(leilao)
                } else if(response.status === 401) {
                    reject('Nenhum leilão ativo')
                } else {
                    reject('Falha de conexão')
                }
            })
            .catch(error => {
                if(error.response.status === 401) {
                    reject('Nenhum leilão ativo')
                } else {
                    reject('Falha de conexão')
                }
            })
        })
    },

    lerLanceMaisAlto: (id: number) => {
        return new Promise<Lance>((resolve, reject) => {
            Api.get(`/leiloes/${id}/lances/mais_alto`)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.data);
                } else if (response.status === 401)  {
                    reject('Leilão não encontrado');
                }
            })
            .catch((error) => {
                reject(error);
            })
        });
    }
};

export default LeiloesService;