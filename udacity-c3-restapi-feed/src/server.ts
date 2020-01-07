import express from 'express';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';
<<<<<<< HEAD

import { V0MODELS } from './controllers/v0/model.index';

=======
import { config } from './config/config';
import { V0MODELS } from './controllers/v0/model.index';

const c = config.dev;

>>>>>>> 13942c4c9f0a7b77fb912411388e70ddc20b085b
(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req, res, next) {
<<<<<<< HEAD
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
=======
    res.header("Access-Control-Allow-Origin", c.url);
>>>>>>> 13942c4c9f0a7b77fb912411388e70ddc20b085b
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
<<<<<<< HEAD
      console.log( `server running http://localhost:${ port }` );
=======
      console.log( `server running ` + c.url );
>>>>>>> 13942c4c9f0a7b77fb912411388e70ddc20b085b
      console.log( `press CTRL+C to stop server` );
  } );
})();