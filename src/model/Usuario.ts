type Usuario = {
    id?: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    email: string;
    senha: string;    
    isAdmin: boolean;
};

export default Usuario;