const sql = require("../config/db");

const Usuario = function (usuario) {
  this.idusuario = usuario.idusuario;
  this.idempleado = usuario.idempleado;
  this.usuario = usuario.usuario;
  this.pass = usuario.pass;
};

Usuario.create = (usuario, result) => {
  sql.query(
    `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","new");`,
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
Usuario.update = (usuario, result) => {
  sql.query(
    `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","update");`,
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
Usuario.view = (result) => {
  sql.query(
    `call ingreso_usuario(${null},${null},"${null}","${null}","view");`,
    (error, res) => {
      if (error) {
        console.log(error)
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
Usuario.viewOne = (id,result) => {
  sql.query(
    `call ingreso_usuario(${null},${id},"${null}","${null}","viewone");`,
    (error, res) => {
      if (error) {
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

Usuario.delete = (id, result) => {
  sql.query(
    `call ingreso_usuario(${id},${null},"${null}","${null}","delete");`,
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
Usuario.findUser=(usuario,result)=>{
  sql.query(
    `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","login");`,
    (error,res)=>{
      if (error) {
        console.log(error);
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error:"not_found",res:error }, null);
      }
    }
  );
}
module.exports = Usuario;
