const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllRatings = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('calificacion');
};

const getRating = (idClient) => {
    // select * from clients where id = idClient
    return database('calificacion')
        .where( { id: idClient });
};

const insertRating = (client) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('calificacion')
        .insert(client);
};

const updateRating = (idClient, client) => {
    return database('calificacion')
        .where('id','=',idClient)
        .update(client)
}

const deleteRating = (idClient) => {
    return database('calificacion')
        .where('id','=',idClient)
        .del()
}

module.exports = {
    getAllRatings,
    getRating,
    insertRating,
    updateRating,
    deleteRating
}