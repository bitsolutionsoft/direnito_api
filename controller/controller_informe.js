const Informe = require("../model/model_informe");


exports.getInforme=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Informe.getInforme(new Informe(req.body), (error, data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro tarea ",...error});
            }else{
                res.status(500).send({message: "Error al consultar tarea ",...error});
            }
        }else
        { res.send(data);}
    });
};

exports.getBalance=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Informe.getInforme(new Informe(req.body), (error, data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro tarea ",...error});
            }else{
                res.status(500).send({message: "Error al consultar tarea ",...error});
            }
        }else
        { res.send(data);}
    });
};
