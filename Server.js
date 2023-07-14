const express =require("express");
const app= express();  

app.listen(3000,()=>
(console.log("server started at 3000 port"))
);
// Define a route
app.get('/', (req, res) => {
    res.send('hi');
  });