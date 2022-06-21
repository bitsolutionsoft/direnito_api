const sql = require("../config/db");

const TipoPago = function (tipoPago) {
  this.idpago = tipoPago.idpago;
  this.nombre = tipoPago.nombre;
};

TipoPago.create = (tipoPago, result) => {
  sql.query(
    `call ingreso_tipo_pago(${tipoPago.idpago},"${tipoPago.nombre}","new");`,
    (error, res) => {
      if (error) {
        result({ message: "Failed", res: error }, null);
        return;
      } else {
        result(null, { message: "Success", res: res });
      }
    }
  );
};
TipoPago.update = (tipoPago, result) => {
  sql.query(
    `call ingreso_tipo_pago(${tipoPago.idpago},"${tipoPago.nombre}","update");`,
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
TipoPago.view = (result) => {
  sql.query(
    `call ingreso_tipo_pago(${null},"${null}","view");`,
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

TipoPago.delete = (id, result) => {
  sql.query(
    `call ingreso_tipo_pago(${id},"${null}","delete");`,
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
module.exports = TipoPago;
