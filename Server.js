const express =require("express");
const app= express(); 

//ue to parse req.body in express use in --> put or post
const bodyparser=require("body-parser") ;

//specificall parse json data and add it to req.body object
app.use(bodyparser.json());

app.listen(3000,()=>
(console.log("server started at 300 port"))
);
// Define a route
app.get('/', (req, res) => {
    res.send('hi inside the get call');
  });

  //post request

  app.post("/home",(req,res)=>
  {
    const {name,rollno}=req.body;
    console.log(name,rollno);

   res.send('hi inside the post call');

  }
  );