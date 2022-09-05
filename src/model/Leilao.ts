type Leilao = {
    id?: number;
    id_produto: number;
    preco_minimo: number;
    inicio: Date;
    termino: Date;
    lance_arremate:number;
};

export default Leilao;