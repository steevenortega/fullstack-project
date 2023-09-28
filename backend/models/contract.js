const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllContracts = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('contrato');
};

const getContract = (idClient) => {
    // select * from clients where id = idClient
    return database('contrato')
        .where( { id: idClient });
};

const insertContract = (client) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('contrato')
        .insert(client);
};

const updateContract = (idClient, client) => {
    return database('contrato')
        .where('id','=',idClient)
        .update(client)
}

const deleteContract = (idClient) => {
    return database('contrato')
        .where('id','=',idClient)
        .del()
}

module.exports = {
    getAllContracts,
    getContract,
    insertContract,
    updateContract,
    deleteContract
}