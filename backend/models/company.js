const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllCompanies = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('empresa');
};

const getCompany = (idClient) => {
    // select * from clients where id = idClient
    return database('empresa')
        .where( { id: idClient });
};

const insertCompany = (client) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('empresa')
        .insert(client);
};

const updateCompany = (idClient, client) => {
    return database('empresa')
        .where('id','=',idClient)
        .update(client)
}

const deleteCompany = (idClient) => {
    return database('empresa')
        .where('id','=',idClient)
        .del()
}

module.exports = {
    getAllCompanies,
    getCompany,
    insertCompany,
    updateCompany,
    deleteCompany
}