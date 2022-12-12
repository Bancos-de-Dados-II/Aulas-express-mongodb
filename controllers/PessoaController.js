const client = require('../database/mongo');

const salvarPessoa = async (req,res) =>{
    const pessoa = req.body;

    try{
        await client.connect();
        const pessoas = client.db('aula').collection('pessoas');
    
        await pessoas.insertOne(pessoa);
    
        res.status(201).send('Usuário criado');
    }catch{
        res.status(400).send('Falha ao salvar');
    }finally{
        client.close();
    }
    
}

const listarPessoas = async (req, res) =>{
    res.status(200).send('ok');
}

const buscarPessoa = async (req, res)=>{    
    res.status(200).send('ok');
}

const deletarPessoa = async (req,res)=>{
    res.status(200).send('ok');
}

const atualizarPessoa = async (req,res)=>{
    res.status(200).send('ok');
}

module.exports = {salvarPessoa, listarPessoas, buscarPessoa, deletarPessoa, atualizarPessoa};