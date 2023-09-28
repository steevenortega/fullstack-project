const express = require('express')
const server = express();
const port = 3000;

const Routes = require('./routes');

server.use(express.json());
server.use('/clients', Routes.ClientRoutes);
server.use('/skills', Routes.SkillRoutes);
server.use('/contracts', Routes.ContractRoutes);
server.use('/companies', Routes.CompanyRoutes);
server.use('/ratings', Routes.RatingRoutes);
server.use('/payments', Routes.PaymentRoutes);


server.listen(port, () =>{
    console.log (`API escuchando en puerto ${port}.`);
});
