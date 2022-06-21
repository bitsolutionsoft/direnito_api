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
};

Abono.create = (abono, result) => {
  sql.query(
    `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.idempleado},"${abono.concepto}",${abono.monto},${abono.tipo_pago},"${abono.comprobante}",${abono.mora},"new");`,
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
Abono.update = (abono, result) => {
  sql.query(
    `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.idempleado},"${abono.concepto}",${abono.monto},${abono.tipo_pago},"${abono.comprobante}",${abono.mora},"update");`,
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
    `call ingreso_abono(${null},${null},${null},"${null}",${null},${null},"${null}",${null},"view");`,
    (error, res) => {
      if (error) {
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
    `call ingreso_abono(${id},${null},${null},"${null}",${null},${null},"${null}",${null},"delete");`,
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
