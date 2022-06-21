module.exports=app=>{
    const verifyToken=require("../middleware/verifyToken.js");
    const plan=require("../controller/controller_plan.js");
    const cliente=require("../controller/controller_cliente.js");
    const empleado=require("../controller/controller_empleado");
    const abono=require("../controller/controller_abono.js");
    const cuentaCliente=require("../controller/controller_cuenta_cliente");
    const tipoPago=require("../controller/controller_tipo_pago");
    const usuario=require("../controller/controller_usuario");
    const permiso =require("../controller/controller_permiso");
    const tipoUsuario =require("../controller/controller_tipo_usuario");
    const modulo=require("../controller/controller_module");


    app.get("/",(req,res)=>{
        res.json({message:"Bienvenido a dinerito ahora"})
    })

    //router Plan
    app.post("/plan",plan.create);
    app.post("/plan/update", plan.update);
    app.get("/plan/view",plan.view);
    app.get("/plan/delete/:id", plan.delete)
    //router Cliente
    app.post("./cliente",cliente.create);
    app.post("./cliente/update",cliente.update);
    app.get("./cliente/view",cliente.view);
    app.get("./cliente/delete/:id",cliente.delete);
    //router empleado
    app.post("./empleado",empleado.create);
    app.post("./empleado/update",empleado.update);
    app.get("./empleado/view",empleado.view);
    app.get("./empleado/delete/:id",empleado.delete);
    //rourter abono
    app.post("./abono",abono.create);
    app.post("./abono/update",abono.update);
    app.get("./abono/view",abono.view);
    app.get("./abono/delete/:id",abono.delete);
    //router cuenta_cliente
    app.post("./cuentaCliente",cuentaCliente.create);
    app.post("./cuentaCliente/update",cuentaCliente.update);
    app.get("./cuentaCliente/view",cuentaCliente.view);
    app.get("./cuentaCliente/delete/:id",cuentaCliente.delete);
      //router tipo_pago
    app.post("./tipoPago",tipoPago.create);
    app.post("./tipoPago/update",tipoPago.update);
    app.get("./tipoPago/view",tipoPago.view);
    app.get("./tipoPago/delete/:id",tipoPago.delete);
        //router usuario
    app.post("./usuario",usuario.create);
    app.post("./usuario/update",usuario.update);
    app.get("./usuario/view",usuario.view);
    app.get("./usuario/delete/:id",usuario.delete);
    //router permiso
    app.post("./permiso",permiso.create);
    app.post("./permiso/update",permiso.update);
    app.get("./permiso/view",permiso.view);
    app.get("./permiso/delete/:id",permiso.delete);
    //router controller tipo usuario
    app.post("./tipoUsuario",tipoUsuario.create);
    app.post("./tipoUsuario/update",tipoUsuario.update);
    app.get("./tipoUsuario/view",tipoUsuario.view);
    app.get("./tipoUsuario/delete/:id",tipoUsuario.delete);
    //router controller modulo
    app.post("./modulo",modulo.create);
    app.post("./modulo/update",modulo.update);
    app.get("./modulo/view",modulo.view);
    app.get("./modulo/delete/:id",modulo.delete);
    

};