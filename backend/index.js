// import express
const express=require("express");
const path=require("path")
const cors=require("cors")
// instantiate the server
const app=express();
const db=require("./config/db")
const userRoutes=require("./routes/auth");
const cookieParser=require("cookie-parser")

require("dotenv").config();
const PORT=process.env.PORT||3000;


// body-Parser must hai otherwise post request nahi maar paoge aur saath mein aaj ke jaise aadha ghanta khaoge wo alag
app.use(express.json());
app.use(cookieParser())

app.use(
	cors({
		origin:"http://localhost:5173",
		credentials:true,
	})
)
app.use("/api/v1/auth",userRoutes);

// listen at the Port no 
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})

// this route will not be mounted this can be accessed as http://localhost:3000/
app.get("/",(req,res)=>{
  res.send("Hello world")
})
// this will connect u to the db
db;

