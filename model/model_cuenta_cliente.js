const sql = require("../config/db");

const CuentaCliente = function (cuentaCliente) {
  this.idcuenta = cuentaCliente.idcuenta;
  this.idcliente = cuentaCliente.idcliente;
  this.idplan = cuentaCliente.idplan;
  this.estado = cuentaCliente.estado;

};

CuentaCliente.create = (cuentaCliente, result) => {
  sql.query(
    `call ingreso_cuenta_cliente(${cuentaCliente.idcuenta},${cuentaCliente.idcliente},${cuentaCliente.idplan},"${cuentaCliente.estado}","new");`,
    (error, res) => {
      if (error) {
        console.log(error)
        result({ message: "Failed", res: error }, null);
        return;
      } else {
        result(null, { message: "Success", res: res });
      }
    }
  );
};
CuentaCliente.update = (cuentaCliente, result) => {
  sql.query(
    `call ingreso_cuenta_cliente(${cuentaCliente.idcuenta},${cuentaCliente.idcliente},${cuentaCliente.idplan},"${cuentaCliente.estado}","update");`,
    (error, res) => {
      if (error) {
        console.log(error);
        result({ message: "Failed", res: error }, null);
        return;
      } else {
        result(null, { message: "Success", res: res });
      }
    }
  );
};
CuentaCliente.view = (result) => {
  sql.query(
    `call ingreso_cuenta_cliente(${null},${null},${null},"Activo","view");`,
    (error, res) => {
      if (error) {
        console.log(error)
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
        console.log(res[0])
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error: "not_found",res:error }, null);
      }
    }
  );
};


CuentaCliente.viewone=(id,result)=>{
  sql.query(
    `call ingreso_cuenta_cliente(${null},${id},${null},"Activo","viewone");`,
    (error,res)=>{
      if(error){
        console.log(error)
        result({message:"Failed",res:error})
        return;
      }
      if(res[0].length){
        result(null,{message:"Success",res:res[0]});
      }else{
        result({error:"not_found", res:error});
      }
    }
  )
}

CuentaCliente.delete = (id, result) => {
  sql.query(
    `call ingreso_cuenta_cliente(${id},${null},${null},"Activo","delete");`,
    (error, res) => {
      if (error) {
        console.log(error);
        result({ message: "Failed", res: error }, null);
        return;
      } else {
        result(null, { message: "Success", res: res });
      }
    }
  );
};
module.exports = CuentaCliente;
