const Abono=require("../model/model_abono");

exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Failed",res:"El contenido no puede ser vacío"});
}
Abono.create(new Abono(req.body),(error,data)=>{
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
    Abono.update(new Abono(req.body),(error, data)=>{
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
    Abono.view((error,data)=>{
        if(error){
            if(error.kind === "not_found"){
                res.status(404).send({message:"Failed",res:error.message});
            }else{
                res.status(500).send({message:"Failed",res:error.message});
            }
        }else{
            res.send(data);
        }
    });
}


exports.delete=(req, res)=>{
 Abono.delete(req.params.id,(error,data)=>{
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