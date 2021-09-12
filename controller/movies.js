const express = require('express');
const router = express.Router();
const movies= require('../models/movies');

// router.get('/name',(req ,res) => {
//     res.send({ 
//         name:'Aditya Kumar Pal',
//         class:'test'
//     });
// });
// router.post('/',(req ,res) => {
//     console.log('Body',req.body,req.name);
//     const {email,password }  = req.body;

//     if(email==='adityapal@gmail.com' && password==='nohub')
//     {
//         res.send("login sucessfull !!!");
//       //  console.log("email matched");
//         return;
//     }

//     // res.send("Post Reques......Hello  world");
//     res.send("incorrect credentials ");
// });

// router.get('/:id',(req ,res) => {

// console.log(` this is the random addess ${req.params.id}`);
// console.log(` this is the random addess ${req.query.page} & ${req.query.limit}`);

//     res.send({ 
//         name:'Testing dynamic adress',
//         class:'test'
//     });
// });



router.post('/movies/',(req ,res) => {

    console.log(` This is the POST/CREATE id `);
    
    
        res.send({ 
            name:'nohub',
            class:'test'
        });
    });


    
router.put('/movies/:id',(req ,res) => {

    console.log(` This is the  PUT/UPDATE value  ${req.params.id}`);
    
    
        res.send({ 
            name:'nohub',
            class:'test'
        });
    });



    
router.get('/movies/:id',(req ,res) => {

    console.log(`This is the GET value movies id ${req.params.id} `,movies);
    const {name}=req.query;
     let movie={};
    movies.forEach(element =>{
        if(element.name===name){
            movie=element
        }
    })
     res.send(movie);
     
    });


    
router.get('/movies/',(req ,res) => {

    console.log(` This is the GET  list of movies`)
        res.send({ 
            name:'nohub Academy',
            class:'test'
        });
    });



    router.delete('/movies/:id',(req ,res) => {

        console.log(` This is the delete value ${req.params.id}`);
        
        
            res.send({ 
                name:'nohub',
                class:'test'
            }); 
        });







// router.get('/:id(*[A-Z]{7})',(req ,res) => {
//     console.log(` this is the random addess ${req.params.id}`);
//         res.send({ 
//             name:'testing Regex ',           
//             class:'test'
//         });
//     });

module.exports = router;