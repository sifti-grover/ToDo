const express = require("express");
const app = express();
//"For every request that comes in, check if it's JSON.
//If it is, parse it into a JavaScript object and attach it to req.body."
app.use(express.json());

let todos = [{
    id: 1,
  text: "Learn Node.js",
  isCompleted: false
}]

// route hnadlers
//1. for creating a ToDo
app.post('/add' , (req,res)=>{
    let newTask ={
      id : todos.length + 1,
      text : req.body.text,
      isCompleted : false
    }
    todos.push(newTask);
    res.json(newTask);
  
})

//To display all the todos
app.get('/' , (req,res)=>{
  res.send(todos);
})

//To delete the todo using its id number 
app.delete('/delete/:id' , (req,res)=>{
    const targetID= parseInt(req.params.id);
    //filter creates a new array that keeps everything except the specific ID you targeted.
    todos = todos.filter(todo => todo.id !== targetID);
    res.json(todos);
})

app.put('/update/:id' , (req,res)=>{
  const targetID = parseInt(req.params.id);
  let targetTask  = todos.find(item => item.id === targetID);

  if(targetTask){
    targetTask.text = req.body.text;
    res.json(todos);
  }else{
    res.status(404).send("Todo not found");
  }

})

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
})