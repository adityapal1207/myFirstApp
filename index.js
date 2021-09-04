const express = require('express');
const app =express();
const route=require('./routes');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
//bodyParser used to parsing the application/json

app.use('/api/',route);
app.use('/static/',express.static('public'));
app.use('/images',express.static('public/images'));

app.get('*',(req,res)=>{
    console.log(`Sorry the url does not exist`);
    res.send(`Sorry the url does not exist`);
})
app.listen(9000, () => {
    console.log(`Server is listening  to 9000`)

});

