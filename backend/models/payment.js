const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllPayments = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('pago');
};

const getPayment = (idClient) => {
    // select * from clients where id = idClient
    return database('pago')
        .where( { id: idClient });
};

const insertPayment = (client) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('pago')
        .insert(client);
};

const updatePayment = (idClient, client) => {
    return database('pago')
        .where('id','=',idClient)
        .update(client)
}

const deletePayment = (idClient) => {
    return database('pago')
        .where('id','=',idClient)
        .del()
}

module.exports = {
    getAllPayments,
    getPayment,
    insertPayment,
    updatePayment,
    deletePayment
}