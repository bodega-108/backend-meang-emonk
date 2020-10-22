import express from "express";
import cors from "cors";
import compression from 'compression';
import enviroment from './config/enviroments';

// CONFIGURACION DE LAS VARIABLES DE ENTORNO

if(process.env.NODE_ENV !== 'production'){
    const env = enviroment;
    console.log(env);
}
async function init() {
    const app = express();

    const PORT = process.env.PORT || 3000;
    app.use('*',cors());
    app.use(compression());
    
    app.get('/',(req,res)=>{
        res.json({
            ok:true,
            message:"llegamos al endpoint"
        });
    });
    
    app.listen(PORT, ()=>{
        console.log(`SERVER RUNING IN PORT ${PORT}`);
    }) 
}

init();
