const sql = require("../config/db");

const Modulo = function (modulo) {
  this.idmodulo = modulo.idmodulo;
  this.nombre = modulo.nombre;
};

Modulo.create = (modulo, result) => {
  sql.query(
    `call ingreso_modulo(${modulo.idmodulo},"${modulo.nombre}","new");`,
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
Modulo.update = (modulo, result) => {
  sql.query(
    `call ingreso_modulo(${modulo.idmodulo},"${modulo.nombre}","update");`,
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
Modulo.view = (result) => {
  sql.query(
    `call ingreso_modulo(${null},"${null}","view");`,
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

Modulo.delete = (id, result) => {
  sql.query(
    `call ingreso_modulo(${id},"${null}","delete");`,
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
module.exports = Modulo;
