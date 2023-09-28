const clientModel = require('../models/client');

const getClients = (req, res) =>  {
    clientModel
        .getAllClients()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getClient = (req, res) => {
    const { id } = req.params

    clientModel
        .getClient(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertClient = (req, res) => {
    const { nombres } = req.body

    {
        clientModel
            .insertClient({ nombres })
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updateClient = (req, res) => {
    const { id } = req.params
    const { nombres } = req.body

    clientModel
        .updateClient(id,{ nombres })
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const deleteClient = (req,res) => {
    const { id } = req.params

    clientModel
        .deleteClient(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertClients = (req, res) =>  res.status(200).send({
    message:"Clients"
});



module.exports = {
    getClients,
    getClient,
    insertClients,
    insertClient,
    updateClient,
    deleteClient
};