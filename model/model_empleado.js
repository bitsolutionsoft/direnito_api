const sql=require("../config/db");

const Empleado=function(empleado){
    this.idempleado=empleado.idempleado;
    this.nombre=empleado.nombre;
    this.apellido=empleado.apellido;
    this.telefono=empleado.telefono;
    this.direccion=empleado.direccion;
    this.dpi=empleado.dpi;
    this.tipo_usuario=empleado.tipo_usuario;
    this.estado=empleado.estado;
}

Empleado.create=(empleado,result)=>{
    sql.query(
    `call ingreso_empleado(${empleado.idempleado},"${empleado.nombre}","${empleado.apellido}","${empleado.telefono}","${empleado.direccion}","${empleado.dpi}",${empleado.tipo_usuario},"${empleado.estado}","new");`,
    (error,res)=>{
        if(error){
            console.log(error);
            result({message:"Failed", res:error},null);
            return;
        }else{
            result(null,{message:"Success", res:res});
        }
    })
}

Empleado.update=(empleado,result)=>{
    sql.query(`call ingreso_empleado(${empleado.idempleado},"${empleado.nombre}","${empleado.apellido}","${empleado.telefono}","${empleado.direccion}","${empleado.dpi}",${empleado.tipo_usuario},"${empleado.estado}","update");`,
    (error,res)=>{
        if(error){
            result({message:"Failed",res:error}, null);
            return;
        }else{
            result(null,{message:"Success", res:res});
        }
    })
}

Empleado.view=(result)=>{
    sql.query(`call ingreso_empleado(${null},"${null}","${null}","${null}","${null}","${null}",${null},"${null}","view");`,
    (error,res)=>{
        if(error){
            console.log(error);
            result({message:"Failed", res:error}, null);
            return;
        }
        if(res[0].length){
            result(null,{message:"Success", res:res[0]});
        }else{
            result({error:"not_Found", res:error}, null);
        }
    })
}
Empleado.delete=(id, result)=>{
    sql.query(`call ingreso_empleado(${id},"${null}","${null}","${null}","${null}","${null}",${null},"${null}","delete");`,
    (error,res)=>{
        if(error){
            result({message:"Failed",res:error},null);
            return;
        }else{
            result(null,{message:"Success", res:res});
        }
    })
}
module.exports=Empleado;