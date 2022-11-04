const express=require('express')
//const bodyParser = require('body-parser')
const mongosee = require('mongoose')

const cors = require('cors');
//const { default: App } = require('../src/App');

require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

//mongodb conection
const uri = process.env.ATLAS_URI;
mongosee.connect(
    uri,{useNewUrlParser:true,useCreateIndex:true}
);

const conection = mongosee.connection;
conection.once('open', ()=> {
    console.log('MongoDB database connection established successfully')
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})