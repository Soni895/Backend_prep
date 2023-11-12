// // // const express =require("express");
// // // const app= express(); 

// // // //ue to parse req.body in express use in --> put or post
// // // const bodyparser=require("body-parser") ;

// // // //specificall parse json data and add it to req.body object
// // // app.use(bodyparser.json());

// // // app.listen(3000,()=>
// // // (console.log("server started at 300 port"))
// // // );
// // // // Define a route
// // // app.get('/', (req, res) => {
// // //     res.send('hi inside the get call');
// // //   });

// // //   //post request

// // //   app.post("/home",(req,res)=>
// // //   {
// // //     const {name,rollno}=req.body;
// // //     console.log(name,rollno);

// // //    res.send('hi inside the post call');

// // //   }
// // //   );


const express=require("express");
const app=express();
const data= require("./routes/data");
const cors = require('cors');
app.use(
  cors({
    origin: "http://localhost:3006",
    credentials: true, // Typo corrected
  })
);


// const bodyparser=require("body-parser") ;
// app.use(bodyparser.json());

app.use(express.json());  // for parsing application/json

app.listen(3000,()=>


{
  console.log("hi darshan soni");
}

);
app.get('/home',(req,res)=>
{
  res.json(
    {
      "name":"darshan",
      "Rollno":"11212530"
    }
  )
})

app.post("/dashboard",(req,res)=>
{
  const {name,rollno}=req.body;
  console.log(name,rollno);
  res.status(200).send(
    
    "call successful"
    
  )

}
)
app.use("/user",data);

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/demo_first'

,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}
)
.then(()=>
{
  console.log("connection successful")
})
.catch(

  (error)=>
  {
    console.log(error);
  } 
)


app.get('*', (req, res) => {
  res.status(404).send('Page Not Found  hi darshan soni');
});