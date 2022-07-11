const fs=require('fs');

exports.create=(req,res)=>{
    console.log(req)
    let igmFile=req.files.foo;
 
    igmFile.mv(`./imgs/${igmFile.name}`,error=>{
        if(error){
            console.log(error)
            res.status(500).send({message: error})
        }else{
            res.send({message:'Success',name:igmFile.name})
        }
    })
}
exports.delete=(req,res)=>{
    console.log(req.params);
    let name=req.params.name;
    let path=__dirname+'/imgs/'+name;
 fs.unlink(path,(error)=>{
    if(error){
        res.status(500).send({message: error})
    }else{
        res.send({message: "Archivo eliminado"})
    }
 })    
}

exports.view=(req,res)=>{
   console.log(req.params);
    let name=req.params.name;
    const filename=__dirname+'/imgs/'+name;
    const existFile=fs.existsSync(filename);
    if(existFile){
       res.sendFile(filename)
    }else{
       res.send({message:"Failed"})
    }
}
/*
app.get('/:name',(req,res)=>{
    console.log(req.params);
let name=req.params.name;
const filename=__dirname+'/imgs/'+name;
const existFile=fs.existsSync(filename);
if(existFile){
   res.sendFile(filename)
}else{
   res.send({message:"Failed"})
}
})

app.get('/delete/:name',(req,res)=>{
   console.log(req.params);
   let name=req.params.name;
   let path=__dirname+'/imgs/'+name;
fs.unlink(path,(error)=>{
   if(error){
       res.status(500).send({message: error})
   }else{
       res.send({message: "Archivo eliminado"})
   }
})
   
})

app.post('/upload',(req,res)=>{
  // console.log("ver variable foo",files)
   console.log(req)
   let igmFile=req.files.foo;

   igmFile.mv(`./imgs/${igmFile.name}`,error=>{
       if(error){
           console.log(error)
           res.status(500).send({message: error})
       }else{
           res.send({message:'Success',name:igmFile.name})
       }
   })
})*/