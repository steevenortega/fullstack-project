const contractModel = require('../models/contract');

const getContracts = (req, res) =>  {
    contractModel
        .getAllContracts()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getContract = (req, res) => {
    const { id } = req.params

    contractModel
        .getContract(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertContract = (req, res) => {
    const { nombres } = req.body

    if(first_name !== '' && last_name !== ''){
        contractModel
            .insertContract({ nombres})
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updateContract = (req, res) => {
    const { id } = req.params
    const { nombres } = req.body

    contractModel
        .updateContract(id,{ nombres})
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const deleteContract = (req,res) => {
    const { id } = req.params

    contractModel
        .deleteContract(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertContracts = (req, res) =>  res.status(200).send({
    message:"habilidad"
});



module.exports = {
    getContracts,
    getContract,
    insertContract,
    updateContract,
    deleteContract,
    insertContracts
    
};