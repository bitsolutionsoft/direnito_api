const mysql=require("mysql");
const db_config=require("./db_config");

const connection=mysql.createConnection({
host:db_config.HOST,
port:db_config.PORT,
user:db_config.USER,
password:db_config.PASSWORD,
database:db_config.DATABASE
});

function handleDisconect(){
    console.log("handelDisconnect");    
    connection.distroy();
    connection.mysql.createConnection(connection);

    connection.connect(error=>{
        if(error){
            console.log(error);
            setTimeout(handleDisconect,1000);
            throw error;
        }
        else{
            console.log("Conexion establecida");
        }
    });
    connection.on(error, function(error){
        if(error){
            setTimeout(handleDisconect,1000);
            handleDisconect();
        }
        else
        {
            throw error;
        }
    });
}

module.exports=connection;