const sql=require("../config/db_config");
const Cliente = function(cliente){
    this.idcliente=cliente.idcliente;
    this.nombre=cliente.nombre;
    this.apellido=cliente.apellido;
    this.telefono=cliente.telefono;
    this.direccion=cliente.direccion;
    this.dpi=cliente.dpi;
    this.f_perfil=cliente.f_perfil;
    this.f_casa=cliente.f_casa;
    this.f_dpi=cliente.f_dpi;
    this.ubicacion=cliente.ubicacion;
    this.estado=cliente.estado;
}

Cliente.create=(cliente, result)=>{
    sql.query(`call ingreso_cliente(${cliente.idcliente},"${cliente.nombre}","${cliente.apellido}","${cliente.telefono}","${cliente.direccion}",${cliente.f_perfil},${cliente.f_casa},${cliente.f_dpi},"${cliente.ubicacion}","${cliente.estado}","new" )};`,
    (error,res)=>{
        if (error){
            result({message:"Failed", res:error}, null);
            return;
        }else{
            result(null,{message:"Success", res:res});
        }
    })
}
Cliente.update=(cliente,result)=>{
    sql.query(`call ingreso_cliente(${cliente.idcliente},"${cliente.nombre}","${cliente.apellido}","${cliente.telefono}","${cliente.direccion}",${cliente.f_perfil},${cliente.f_casa},${cliente.f_dpi},"${cliente.ubicacion}","${cliente.estado}","update" )};`,
    (error,res)=>{
        if(error){
            result({message:"Failed",res:error}, null);
            return;
        }else{
            result(null,{message:"Success",res:res})
        }
    })
}
Cliente.view=(result)=>{
    sql.query(`call ingreso_cliente(${null},"${null}","${null}","${null}","${null}",${null},${null},${null},"${null}","${null}","view" )};`,
    (error,res)=>{
        if(error){
            result({message:"Failed", res:error}, null);
            return;
        }
        if(res[0].length){
            result(null,{message:"Success",res:res[0]});
        }
        else{
            result({error:"not_found", res:error},null);
        }
    })
}
Cliente.delete=(id,result)=>{
    sql.query(`call ingreso_cliente(${id},"${null}","${null}","${null}","${null}",${null},${null},${null},"${null}","${null}","delete" )};`,
    (error, res)=>{
        if(error){
            result({message:"Failed",res:error}, null);
        }else{
            result(null,{message:"Success", res:res});
        }
    })
}

module.exports=Cliente;