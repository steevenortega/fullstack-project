const skillModel = require('../models/skill');

const getSkills = (req, res) =>  {
    skillModel
        .getAllSkills()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getSkill = (req, res) => {
    const { id } = req.params

    skillModel
        .getSkill(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertSkill = (req, res) => {
    const { nombres } = req.body

    if(first_name !== '' && last_name !== ''){
        skillModel
            .insertSkill({ nombres})
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updateSkill = (req, res) => {
    const { id } = req.params
    const { nombres } = req.body

    skillModel
        .updateSkill(id,{ nombres})
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const deleteSkill = (req,res) => {
    const { id } = req.params

    skillModel
        .deleteSkill(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertSkills = (req, res) =>  res.status(200).send({
    message:"habilidad"
});



module.exports = {
    getSkills,
    getSkill,
    insertSkill,
    updateSkill,
    deleteSkill,
    insertSkills
    
};