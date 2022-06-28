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
    const modulo=require("../controller/controller_modulo");


    app.get("/",(req,res)=>{
        res.json({message:"Bienvenido a dinerito ahora"})
    })

    //router Plan
    app.post("/plan",verifyToken,plan.create);
    app.post("/plan/update",verifyToken, plan.update);
    app.get("/plan/view",verifyToken,plan.view);
    app.get("/plan/delete/:id",verifyToken, plan.delete)
    //router Cliente
    app.post("/cliente",verifyToken,cliente.create);
    app.post("/cliente/update",verifyToken,cliente.update);
    app.get("/cliente/view",verifyToken,cliente.view);
    app.get("/cliente/delete/:id",verifyToken,cliente.delete);
    //router empleado
    app.post("/empleado",verifyToken,empleado.create);
    app.post("/empleado/update",verifyToken,empleado.update);
    app.get("/empleado/view",verifyToken,empleado.view);
    app.get("/empleado/delete/:id",verifyToken,empleado.delete);
    //rourter abono
    app.post("/abono",verifyToken,abono.create);
    app.post("/abono/update",verifyToken,abono.update);
    app.get("/abono/view",verifyToken,abono.view);
    app.get("/abono/delete/:id",verifyToken,abono.delete);
    //router cuenta_cliente
    app.post("/cuentaCliente",verifyToken,cuentaCliente.create);
    app.post("/cuentaCliente/update",verifyToken,cuentaCliente.update);
    app.get("/cuentaCliente/view",verifyToken,cuentaCliente.view);
    app.get("/cuentaCliente/viewone/:id",verifyToken,cuentaCliente.viewone);
    app.get("/cuentaCliente/delete/:id",verifyToken,cuentaCliente.delete);
      //router tipo_pago
    app.post("/tipoPago",verifyToken,tipoPago.create);
    app.post("/tipoPago/update",verifyToken,tipoPago.update);
    app.get("/tipoPago/view",verifyToken,tipoPago.view);
    app.get("/tipoPago/delete/:id",verifyToken,tipoPago.delete);
        //router usuario
    app.post("/usuario",verifyToken,usuario.create);
    app.post("/usuario/update",verifyToken,usuario.update);
    app.post("/usuario/login",usuario.findUser);
    app.get("/usuario/view",verifyToken,usuario.view);
    app.get("/usuario/delete/:id",verifyToken,usuario.delete);
    //router permiso
    app.post("/permiso",verifyToken,permiso.create);
    app.post("/permiso/update",verifyToken,permiso.update);
    app.get("/permiso/view",verifyToken,permiso.view);
    app.get("/permiso/emp/:id",verifyToken,permiso.viewone);
    app.get("/permiso/delete/:id",verifyToken,permiso.delete);
    //router controller tipo usuario
    app.post("/tipoUsuario",verifyToken,tipoUsuario.create);
    app.post("/tipoUsuario/update",verifyToken,tipoUsuario.update);
    app.get("/tipoUsuario/view",verifyToken,tipoUsuario.view);
    app.get("/tipoUsuario/delete/:id",verifyToken,tipoUsuario.delete);
    //router controller modulo
    app.post("/modulo",verifyToken,modulo.create);
    app.post("/modulo/update",verifyToken,modulo.update);
    app.get("/modulo/view",verifyToken,modulo.view);
    app.get("/modulo/delete/:id",verifyToken,modulo.delete);
    

};