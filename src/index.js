const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const {PORT}  = require('./config/serverConfg');


const setupAndStartServer = async() =>{   
    const app = express();

    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/user', userRoutes);

    app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
    });
}

setupAndStartServer();