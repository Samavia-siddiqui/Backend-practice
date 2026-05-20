const express = require ("express")


const app= express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.get("/contact",(req,res)=>{
    res.send("this is Contact page ")
})

app.put("/contact",(req,res)=>{
    const updatedContact = req.body;
    res.json({
        message: "Contact updated successfully",
        updatedContact
    });
})

app.delete("/contact",(req,res)=>{
    res.json({
        message: "Contact deleted successfully"
    });
})

app.listen(3000,()=>{
    console.log("server is running ");
}) 
