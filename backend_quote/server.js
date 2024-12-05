const express = require('express');

const cors = require('cors');

require('./config/connect');

const cardRoute = require('./routes/card');


const app = express();
app.use(express.json()); 
app.use(cors()); //l corse heki blasetha ba3d creation mta3 app w 9bal route



app.use('/getimage' , express.static('./imgs'));

app.use('/card', cardRoute);










app.listen( 3000 , ()=>{
    console.log("server is running on port 3000");
});