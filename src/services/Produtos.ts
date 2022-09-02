import Produto from "../model/Produto";
import Api from "./Api";

const ProdutosService = {
    ler: (id: number) => {
        return new Promise<Produto>((resolve, reject) => {
            Api.get(`/produtos/${id}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
        })
    }
};

export default ProdutosService;