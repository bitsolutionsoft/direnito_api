const sql = require("../config/db");

const Abono = function (abono) {
  this.idabono = abono.idabono;
  this.idcuenta= abono.idcuenta;
  this.idempleado = abono.idempleado;
  this.concepto = abono.concepto;
  this.monto = abono.monto;
  this.tipo_pago=abono.tipo_pago;
  this.comprobante=abono.comprobante;
  this.mora=abono.mora;
  this.estado=abono.estado;
  this.prox_pago=abono.prox_pago;
};

Abono.create = (abono, result) => {
  sql.query(
    `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.idempleado},"${abono.concepto}",${abono.monto},${abono.tipo_pago},"${abono.comprobante}",${abono.mora},"${abono.estado}","${abono.prox_pago}","new");`,
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
Abono.create_prox=(abono, result)=>{
  sql.query(
    `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.idempleado},"${abono.concepto}",${abono.monto},${abono.tipo_pago},"${abono.comprobante}",${abono.mora},"${abono.estado}","${abono.prox_pago}","prox");`,
  (error,res)=>{
    if(error){
      console.log(error)
      result({message: "Failed", res:error}, null)
      return;
    }else{
      result(null, {message:"Success", res:res})
    }
  }
  )
}

Abono.update = (abono, result) => {
  sql.query(
    `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.idempleado},"${abono.concepto}",${abono.monto},${abono.tipo_pago},"${abono.comprobante}",${abono.mora},"${abono.estado}","${abono.prox_pago}","update");`,
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
Abono.view = (result) => {
  sql.query(
    `call ingreso_abono(${null},${null},${null},"${null}",${null},${null},"${null}",${null},"${null}","2022-12-12","view");`,
    (error, res) => {
      if (error) {
		  console.log(error);
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error: "not_found",res:error }, null);
      }
    }
  );
};

Abono.viewxp = (id, result) => {
  sql.query(
  `call ingreso_abono(${null},${id},${null},"${null}",${null},${null},"${null}",${null},"${null}","2022-12-12","viewxc");`,
    (error, res) => {
      if (error) {
		  console.log(error);
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error: "not_found",res:error }, null);
      }
    }
  );
};

Abono.viewinfocliente = (id, result) => {
  sql.query(
  `call infocliente(${id});`,
    (error, res) => {
      if (error) {
		  console.log(error);
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error: "not_found",res:error }, null);
      }
    }
  );
};

Abono.viewinfovale = (id, result) => {
  sql.query(
  `call infovale(${id});`,
    (error, res) => {
      if (error) {
		  console.log(error);
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error: "not_found",res:error }, null);
      }
    }
  );
};

Abono.delete = (id, result) => {
  sql.query(
    `call ingreso_abono(${id},${null},${null},"${null}",${null},${null},"${null}",${null},"${null}","2022-12-12","delete");`,
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
module.exports = Abono;
