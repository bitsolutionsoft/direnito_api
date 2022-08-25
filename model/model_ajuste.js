const sql = require('../config/db');
const Ajuste=function(ajuste){
 this.nombre=ajuste.nombre;
 this.descripcion=ajuste.descripcion,
 this.direccion=ajuste.direccion,
 this.mora=ajuste.mora,
 this.diasmora=ajuste.diasmora   

}
Ajuste.Create=(ajuste, result)=>{
    sql.query(
        `call ingreso_ajuste("${ajuste.nombre}","${ajuste.descripcion}","${ajuste.direccion}",${ajuste.diasmora},${ajuste.mora},"new")`,
    (error,res)=>{
        if(error){
            console.log(error);
            result({message:"Failed",res:error},null);
            return
        }
        console.log(res)
        result (null,{message:"Success",res:res})
    });

}
Ajuste.Update=(ajuste,result)=>{
sql.query(
    `call ingreso_ajuste("${ajuste.nombre}","${ajuste.descripcion}","${ajuste.direccion}",${ajuste.diasmora},${ajuste.mora},"update")`,
    (error,res)=>{
        if(error){
            console.log(error)
            result({message:"Failed",res:res}, null);
            return
        }
        console.log(res)
        result(null,{message:"Success",res:res})
    }
)
}
Ajuste.View=(result)=>{
sql.query(`call ingreso_ajuste("--","--","--",0,"0","view")`,
(error,res)=>{
if(error){
    console.log(error)
    result({message:"Failed",res:res},null);
    return
}
if(res[0].length){
    console.log(res[0])
result(null,{message:"Success", res:res[0]})
return
}
result({error:"not_found",res:error},null);
}
)
}
module.exports = Ajuste;