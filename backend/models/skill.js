const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllSkills = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('habilidad');
};

const getSkill = (idClient) => {
    // select * from clients where id = idClient
    return database('habilidad')
        .where( { id: idClient });
};

const insertSkill = (client) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('habilidad')
        .insert(client);
};

const updateSkill = (idClient, client) => {
    return database('habilidad')
        .where('id','=',idClient)
        .update(client)
}

const deleteSkill = (idClient) => {
    return database('habilidad')
        .where('id','=',idClient)
        .del()
}

module.exports = {
    getAllSkills,
    getSkill,
    insertSkill,
    updateSkill,
    deleteSkill
}