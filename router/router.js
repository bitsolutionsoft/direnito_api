module.exports=app=>{
    const verifyToken=require("../middleware/verifyToken");
    const plan=require("../controller/controller_plan");


    app.get("/",(req,res)=>{
        res.json({message:"Bienvenido a dinerito ahora"})
    })

    app.post("/plan",plan.create);
    app.post("/plan/update", plan.update);
    app.get("/plan/view",plan.getView);
    app.get("/plan/delete/:id", plan.delete)
};