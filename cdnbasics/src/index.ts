import express from "express";
import {PrismaClient} from "@prisma/client";
import cors from "cors";
import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../uploads')
    },
    fileName:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage
})


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
}))
const prisma = new PrismaClient();

app.get("/api/posts",async(req,res)=>{
    const posts = await prisma.posts.findMany({
        orderBy:[{
            createdAt:"desc"
        }]
    })
    res.send(posts);
})

app.post("/api/posts",upload.single("file"),(req,res)=>{
    const image = req.file;
    const data = req.body.caption;
    console.log({image,data});
    res.send({})
})

app.delete("/api/posts/:id",async(req,res)=>{
    const id = req.params.id;

})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})