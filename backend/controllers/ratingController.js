const ratingModel = require('../models/rating');
const getRatings = (req, res) =>  {
    ratingModel
        .getAllRatings()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getRating = (req, res) => {
    const { id } = req.params

    ratingModel
        .getRating(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertRating = (req, res) => {
    const { nombres } = req.body

    if(first_name !== '' && last_name !== ''){
        ratingModel
            .insertRating({ nombres})
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updateRating = (req, res) => {
    const { id } = req.params
    const { nombres } = req.body

    ratingModel
        .updateRating(id,{ nombres})
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const deleteRating = (req,res) => {
    const { id } = req.params

    ratingModel
        .deleteRating(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertRatings = (req, res) =>  res.status(200).send({
    message:"habilidad"
});



module.exports = {
    getRatings,
    getRating,
    insertRating,
    updateRating,
    deleteRating,
    insertRatings
    
};