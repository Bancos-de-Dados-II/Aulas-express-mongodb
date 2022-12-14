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
    try{
        await client.connect();
        const pessoas = client.db('aula').collection('pessoas');
        const retorno = await pessoas.find({email:req.params.email}).toArray();
        res.status(200).send(retorno);
    }catch{
        res.status(400).send('Falha ao listar');
    }finally{
        client.close();
    }
}

const deletarPessoa = async (req,res)=>{
    try{
        await client.connect();
        const pessoas = client.db('aula').collection('pessoas');
        const retorno = await pessoas.deleteOne({email:req.params.email});
        
        //Verificar se algum usuário foi removido
        if(retorno.deletedCount > 0){
            res.status(200).send("Usuário removido");
        }else{
            res.status(400).send("Usuário não encontrado");
        }

    }catch{
        res.status(400).send('Falha ao listar');
    }finally{
        client.close();
    }
}

const atualizarPessoa = async (req,res)=>{
    try{
        await client.connect();
        const pessoas = client.db('aula').collection('pessoas');
        const retorno = await pessoas.replaceOne({email:req.params.email}, req.body);
        
        //Verificar se algum usuário foi removido
        if(retorno.modifiedCount > 0){
            res.status(200).send("Usuário Atualizado");
        }else{
            res.status(400).send("Usuário não encontrado");
        }

    }catch{
        res.status(400).send('Falha ao listar');
    }finally{
        client.close();
    }
}

module.exports = {salvarPessoa, listarPessoas, buscarPessoa, deletarPessoa, atualizarPessoa};