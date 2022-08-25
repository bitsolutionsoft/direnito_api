const jwt=require("jsonwebtoken");
const Usuario=require("../model/model_usuario");

exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Failed",res:"El contenido no puede ser vacío"});
}
Usuario.create(new Usuario(req.body),(error,data)=>{
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
    Usuario.update(new Usuario(req.body),(error, data)=>{
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
    Usuario.view((error,data)=>{
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

exports.viewOne=(req,res)=>{
    Usuario.viewOne(req.params.id,(error,data)=>{
        if(error){
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
 Usuario.delete(req.params.id,(error,data)=>{
    if(error){
        if(error.kind === "not_found"){
            res.status(404).send({message:"Failed", res:error.res});
        }else{
            res.status(500).send({message:"Failed", res:error.res});
        }
    }else{
        res.send(data)
    }
 });
}
exports.findUser=(req,res)=>{
    Usuario.findUser(new Usuario(req.body),(error,data)=>{
        if(error){
            console.log(error);
            if(error.kind === "not_found"){
                res.status(404).send({message:"Failed", res:error.res});
            }else{
                res.status(500).send({message:"Failed", res:error.res});
            }
        }else{
            const user={
                id:0,
                nombre:'Dinerito_Ahora',
                cdd:"5689"
            }
            jwt.sign({user},'secretKey',(error,token)=>{
                data.res[0].token=token
                res.send(data) 
            })
        }
    })
}
