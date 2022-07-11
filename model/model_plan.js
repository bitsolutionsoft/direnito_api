const sql = require("../config/db");

const Plan = function (plan) {
  this.idplan = plan.idplan;
  this.monto = plan.monto;
  this.interes = plan.interes;
  this.plan_dia = plan.plan_dia;
  this.estado = plan.estado;
};

Plan.create = (plan, result) => {
  sql.query(
    `call ingreso_plan(${plan.idplan},${plan.monto},${plan.interes},${plan.plan_dia},"${plan.estado}","new");`,
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
Plan.update = (plan, result) => {
  sql.query(
    `call ingreso_plan(${plan.idplan},${plan.monto},${plan.interes},${plan.plan_dia},"${plan.estado}","update");`,
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
Plan.view = (result) => {
  sql.query(
    `call ingreso_plan(${null},${null},${null},${null},"Activo","view");`,
    (error, res) => {
      if (error) {
        result({message:"Failed",res:error}, null);
        return;
      }
      if (res[0].length) {
		  console.log(res[0]);
        result(null, { message: "Success", res: res[0] });
      } else {
        result({ error: "not_found",res:error }, null);
      }
    }
  );
};

Plan.delete = (id, result) => {
  sql.query(
    `call ingreso_plan(${id},${null},${null},${null},"${null}","delete");`,
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
module.exports = Plan;
