const sql=require("../config/db");

const Plan=function(plan){
    this.idplan=plan.idplan;
    this.monto=plan.monto;
    this.interes=plan.interes;
    this.plan_dia=plan.plan_dia;
    this.estado=plan.estado;
    
}

Plan.create=(plan, result)=>{
sql.query(
    `call ingreso_plan(${plan.idplan},${plan.monto},${plan.interes},${plan.plan_dia},"${plan.estado}","new");`,
    (error,res)=>{
        if(error){
            result(error, null)
            return;
        }else{
            result(null, {message:"Success",res:res});
        }
    });
}
Plan.update=(plan, result)=>{
    `call ingreso_plan(${plan.idplan},${plan.monto},${plan.interes},${plan.plan_dia},"${plan.estado}","update");`,
    (error, res)=>{
        if(error){
            console.log(error);
            result(error, null)
            return;
        }else{
            result(null,{message:"Success",res:res})
        }
    }
}
Plan.getView=(result)=>{
    sql.query(
        `call ingreso_plan(${null},${null},${null},${null},"Activo","view");`,
        (error, res)=>{
            if(error){
                result(error, null);
                return
            }
            if(res[0].length){
                result(null,{message:"Success",res:res[0]});
            }else{
                result({error: "not_found"}, null);
            }

        }
    )
}

Plan.delete=(id, result)=>{
    sql.query(`call ingreso_plan(${id},${null},${null},${null},${null},"${null}","delete");`,
    (error,res)=>{
        if(error){
            result(null,{message:"Failed", res:res});
            return;
        }else{
            result(null,{message:"Success", res:res})
        }
    
    });
}
module.exports=Plan;