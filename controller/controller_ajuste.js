const Ajuste = require('../model/model_ajuste');
exports.Create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Failed",res:"el contenido no puede ser vacío"})
        return
    }
    Ajuste.Create(new Ajuste(req.body),(error,data)=>{
        if(error){
            res.status(500).send({message:"Failed",error:res})            
        }else{
            res.send(data);
        }

    })
}
exports.Update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Failed",res:"El contenido no puede se vacío"});
        return
    }
    Ajuste.Update(new Ajuste(req.body),(error,data)=>{
        if(error){
            res.status(500).send({message:"Failed",error:res});
        }else{
            res.send(data);
        }
    })
}
exports.View=(req,res)=>{
Ajuste.View((error,data)=>{
    if(error){
        if(error.kind==="not_found"){
            res.status(404).send({message:"Failed",res:error});
        }else{
            res.status(500).send({message:"Failed",res:error});
        }
    }else{
        res.send(data)
    }
})
}