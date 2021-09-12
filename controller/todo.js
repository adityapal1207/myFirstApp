const todoController={
      create:(req,res) =>{
    
        console.log(`Hello ,this is todp controller`);
        res.send({
            name:'todo app',
            class:'nohub'
        })
      }
}
module.exports = todoController;