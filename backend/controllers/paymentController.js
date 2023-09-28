const paymentModel = require('../models/payment');

const getPayments = (req, res) =>  {
    paymentModel
        .getAllPayments()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getPayment = (req, res) => {
    const { id } = req.params

    paymentModel
        .getPayment(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertPayment = (req, res) => {
    const { nombres } = req.body

    if(first_name !== '' && last_name !== ''){
        paymentModel
            .insertPayment({ nombres})
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json(error));
    }
}

const updatePayment = (req, res) => {
    const { id } = req.params
    const { nombres } = req.body

    paymentModel
        .updatePayment(id,{ nombres})
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const deletePayment = (req,res) => {
    const { id } = req.params

    paymentModel
        .deletePayment(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertPayments = (req, res) =>  res.status(200).send({
    message:"pago"
});



module.exports = {
    getPayments,
    getPayment,
    insertPayment,
    updatePayment,
    deletePayment,
    insertPayments
    
};