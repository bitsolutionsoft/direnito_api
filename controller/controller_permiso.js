const Permiso=require("../model/model_permiso");

exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Failed",res:"El contenido no puede ser vacío"});
}
Permiso.create(new Permiso(req.body),(error,data)=>{
    if(error){ 
		res.status(500).send({message:'Failed',res:error.res.message});
	}
    else  {
		res.send(data);
	}    
});
}

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Failed",res:"El contenido no puede ser vacío"});
    }
    Permiso.update(new Permiso(req.body),(error, data)=>{
        if(error){
            console.log(error);
            if(error.kind==="not_found"){
                res.status(404).send({message:"Failed",res:error.message});
            }else{
                res.status(500).send({message:"Failed",res:error.message})
            }
        }else{
            res.send(data);
        }
    })
}

exports.view=(req,res)=>{
    Permiso.view((error,data)=>{
        if(error){
            console.log(error);
            if(error.kind === "not_found"){
                res.status(404).send({message:"Failed",res:error});
            }else{
                res.status(500).send({message:"Failed",res:error});
            }
        }else{
            res.send(data);
        }
    });
}

exports.viewone=(req,res)=>{
    Permiso.viewone(req.params.id,(error,data)=>{
        if(error){
            console.log(error);
            if(error.kind === "not_found"){
                res.status(404).send({message:"Failed",res:error});
            }else{
                res.status(500).send({message:"Failed",res:error});
            }
        }else{
            res.send(data);
        }
    });
}
exports.delete=(req, res)=>{
 Permiso.delete(req.params.id,(error,data)=>{
    if(error){
        if(error.kind === "not_found"){
            res.status(404).send({message:"Failed", res:error.res.message});
        }else{
            res.status(500).send({message:"Failed", res:error.res.message});
        }
    }else{
        res.send(data)
    }
 })    
}