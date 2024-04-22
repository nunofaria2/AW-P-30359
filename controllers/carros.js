const fs = require('fs');

//devolve todos os carros
exports.getAll = async (req, res) => {
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os carros
    return res.send(data.carros);
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //procurar um carro com o id
    const carros = data.carros.filter(carros => carros.id == id);
    //devolve o carro
    res.send(carros);
}


//cria um carro
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhe, Foto} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //adicionar carro à lista
    data.carros.push(req.body);
    //Criar o novo ficheiro com o carro adicionado
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolve o novo carro
    return res.status(201).send(req.body);
}


//atualiza o carro
exports.update = async (req, res) => {
    //obter o carro pelas características enviadas
    const {number, name, city, birthday } = req.body;
    //envia o carro alterado
    return res.send(req.body);
}

//apaga o carro com o id
exports.delete = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //devolve ok
    return res.send("ok");
}
