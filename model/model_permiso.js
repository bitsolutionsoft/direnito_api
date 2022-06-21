const sql = require("../config/db");

const Permiso = function (permiso) {
  this.idpermiso = permiso.idpermiso;
  this.idtipo = permiso.idtipo;
  this.idmodulo = permiso.idmodulo;
  this.permiso = permiso.permiso;
  
};

Permiso.create = (permiso, result) => {
  sql.query(
    `call ingreso_permiso(${permiso.idpermiso},${permiso.idtipo},${permiso.idmodulo},${permiso.permiso},"new");`,
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
Permiso.update = (permiso, result) => {
  sql.query(
    `call ingreso_permiso(${permiso.idpermiso},${permiso.idtipo},${permiso.idmodulo},${permiso.permiso},"update");`,
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
Permiso.view = (result) => {
  sql.query(
    `call ingreso_permiso(${null},${null},${null},${null},"view");`,
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

Permiso.viewone=(id,result)=>{
  sql.query(
    `call ingreso_permiso(${null},${id},${null},${null},"view");`,
    (error,res)=>{
      if(error){
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
Permiso.delete = (id, result) => {
  sql.query(
    `call ingreso_permiso(${id},${null},${null},${null},"delete");`,
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
module.exports = Permiso;
