const sql = require("../config/db");

const TipoUsuario = function (tipoUsuario) {
  this.idtipo = tipoUsuario.idtipo;
  this.nombre = tipoUsuario.nombre;
};

TipoUsuario.create = (tipoUsuario, result) => {
  sql.query(
    `call ingreso_tipo_usuario(${tipoUsuario.idtipo},"${tipoUsuario.nombre}","new");`,
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
TipoUsuario.update = (tipoUsuario, result) => {
  sql.query(
    `call ingreso_tipo_usuario(${tipoUsuario.idtipo},"${tipoUsuario.nombre}","update");`,
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
TipoUsuario.view = (result) => {
  sql.query(
    `call ingreso_tipo_usuario(${null},"${null}","view");`,
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

TipoUsuario.delete = (id, result) => {
  sql.query(
    `call ingreso_tipo_usuario(${id},"${null}","delete");`,
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
module.exports = TipoUsuario;
