const express = require('express')
const server = express();
const port = 3000;

const Routes = require('./routes');

server.use(express.json());
server.use(function (req, res, next) {res.setHeader('Access-Control-Allow-Origin', '*');res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH');res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');next();});
server.use('/clients', Routes.ClientRoutes);
server.use('/skills', Routes.SkillRoutes);
server.use('/contracts', Routes.ContractRoutes);
server.use('/companies', Routes.CompanyRoutes);
server.use('/ratings', Routes.RatingRoutes);
server.use('/payments', Routes.PaymentRoutes);




server.listen(port, () =>{
    console.log (`API escuchando en puerto ${port}.`);
});
