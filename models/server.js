const express = require('express');
const cors = require('cors');
class Server{


    constructor(){
        
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosPath ='/api/usuarios';


        //moddlewares
        this.middlewares();

        //rutas de mi app
        this.routes();


    }

    middlewares(){

        this.app.use(cors());
        //lectura y parseo del bobdy
        this.app.use(express.json());      
        //directorio public
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){

        this.app.listen(process.env.PORT, ()=>{

            console.log('servidor corriendo en puerto,', process.env.PORT)
        });
    }
}





module.exports= Server;