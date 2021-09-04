const express = require('express');
const router = express.Router();
router.get('/name',(req ,res) => {
    res.send({ 
        name:'Aditya Kumar Pal',
        class:'test'
    });
});
router.post('/',(req ,res) => {
    console.log('Body',req.body);
    res.send("Post Reques......Hello  world");
});
router.get('/:id',(req ,res) => {

console.log(` this is the random addess ${req.params.id}`);
console.log(` this is the random addess ${req.query.page} & ${req.query.limit}`);

    res.send({ 
        name:'Testing dynamic adress',
        class:'test'
    });
});
router.get('/:id(*[A-Z]{7})',(req ,res) => {

    console.log(` this is the random addess ${req.params.id}`);
    
        res.send({ 
            name:'testing Regex ',
            class:'test'
        });
    });

module.exports = router;