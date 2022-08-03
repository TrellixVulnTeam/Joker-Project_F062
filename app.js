const express = require("express");
const app = express();
const PORT = 8080;

//View Engine
app.set("view engine", "ejs");

//Arquivos Estáticos
app.set(express.static("public"));

// Rotas
app.get("/", (req, res) => {
  res.render("login");
});
app.get("/Esquecirsenha", (req, res) => {
  res.render("Esquecirsenha");
});

app.listen(PORT, () => {
  console.log("Servidor iniciado em http://localhost:" + PORT);
});

//Data Base
(async () => {
  const database = require("./database/database");

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();
