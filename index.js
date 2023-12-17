const express = require("express")
const fs = require("fs")
const app = express();
app.use(express.static('public'))
const port = 3000 || process.env.PORT

app.get("/sem/:sem",(req,res)=>{
    const file = fs.readFile(`kjdb/${req.params.sem}.json`,"utf8",(err,data)=>{
        const jsondata = JSON.parse(data);
        if(jsondata.show){
            res.json(JSON.parse(data))
        }else{
            res.json({status:500})
        }
    })
})

app.listen(port,()=>{
    console.log(port);
})