const express = require('express');
const app = express();
const route = require('./controller/movies');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//bodyParser used to parsing the application/json
 

//middleware 
 const  middleware = (req,res,next)=>{
     
     console.log('Logging the values' ,);
     req.name='Aditya';
     next(); 

 }
 app.use(middleware);   


app.use('/api/',route);
app.use('/static/',express.static('public'));
app.use('/images',express.static('public/images'));

app.get('*',(req,res)=>{
    console.log(`Sorry the url does not exist`);
    res.send(`Sorry the url does not exist`);
})


app.listen( process.env.PORT || 9000, () => {
    console.log(`Server is listening  to 9000`)

});


