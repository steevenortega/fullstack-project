const companyModel = require('../models/company');

const getCompanies = (req, res) =>  {
    companyModel
        .getAllCompanies()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getCompany = (req, res) => {
    const { id } = req.params

    companyModel
        .getCompany(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertCompany = (req, res) => {
    const { nombre_empresa } = req.body

    {
        companyModel
            .insertCompany({ nombre_empresa})
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updateCompany = (req, res) => {
    const { id } = req.params
    const { nombre_empresa } = req.body

    companyModel
        .updateCompany(id,{ nombre_empresa})
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const deleteCompany = (req,res) => {
    const { id } = req.params

    companyModel
        .deleteCompany(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertCompanies = (req, res) =>  res.status(200).send({
    message:"habilidad"
});



module.exports = {
    getCompanies,
    getCompany,
    insertCompany,
    updateCompany,
    deleteCompany,
    insertCompanies
    
};