const client = require('../database/mongo');

const salvarPessoa = async (req,res) =>{
    const pessoa = req.body;

    try{
        await client.connect();
        const pessoas = client.db('aula').collection('pessoas');
    
        await pessoas.insertOne(pessoa);
    
        res.status(201).send('Usuário criado');
    }catch{
        //TODO: Tratar e-mail duplicado.
        res.status(400).send('Falha ao salvar');
    }finally{
        client.close();
    }
    
}

const listarPessoas = async (req, res) =>{
    try{
        await client.connect();
        const pessoas = client.db('aula').collection('pessoas');
        const retorno = await pessoas.find().toArray();
        res.status(200).send(retorno);
    }catch{
        res.status(400).send('Falha ao listar');
    }finally{
        client.close();
    }
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