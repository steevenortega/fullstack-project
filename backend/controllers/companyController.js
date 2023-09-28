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
    const { nombres } = req.body

    if(first_name !== '' && last_name !== ''){
        companyModel
            .insertCompany({ nombres})
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updateCompany = (req, res) => {
    const { id } = req.params
    const { nombres } = req.body

    companyModel
        .updateCompany(id,{ nombres})
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