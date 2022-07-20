
const sql=require("../config/db");

const Informe=function(informe){
    this.id =informe.id;
    this.finicio  =informe.finicio;
    this.ffinal  =informe.ffinal;
    this.accion=informe.accion
}
 

Informe.getInforme=(informe,result)=>{
    sql.query(
      `call consulta_informe(${informe.id},"${informe.finicio}","${informe.ffinal}","${informe.accion}");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error);
                result(error, null);
                return;
            }if(res[0].length){
                console.log(res[0]);
                result(null, {message:"Success",res:res[0]});
            }else{
                result({error:"not_found"},null);
            }
        });
    }
 

 
      
  module.exports=Informe;
 
 
 