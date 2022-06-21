const CuentaCliente=require("../model/model_cuenta_cliente");

exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Failed",res:"El contenido no puede ser vacío"});
}
CuentaCliente.create(new CuentaCliente(req.body),(error,data)=>{
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
    CuentaCliente.update(new CuentaCliente(req.body),(error, data)=>{
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

exports.view=(res)=>{
    CuentaCliente.view((error,data)=>{
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
 CuentaCliente.delete(req.params.id,(error,data)=>{
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