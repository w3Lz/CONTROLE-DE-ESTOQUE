const express = require('express');
const userRoute = require("./src/routes/user.route")


const app = express();

app.use("/soma", userRoute);

// ROTA
  // METODOS HTTP - CRUD ( CREATE, READ, UPDATE, DELETE )
    // GET    - PEGA UMA INFO
    // POST   - CRIA UMA UNFO
    // PUT    - ALTERA TODA A INFO
    // PATH   - ALTERA PARTE DA INFO
    // DELETE - APAGA UMA INFO

  // Name - UM IDENTIFICADOR DA ROTA

  // Function ( callback ) - RESPONSAVEL POR EXECUTAR ALGUM COMANDO

app.listen(3000)