import Leilao from "../model/Leilao";
import Api from "./Api";

const LeiloesService = {
    lerAtivo: () => {
        return new Promise<Leilao>((resolve, reject) => {
            Api.get('/leilao/ativo')
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data)
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
};

export default LeiloesService;