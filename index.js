require("dotenv").config();
const express = require("express");
const massive = require("massive");
const productsCtrl = require("./products_controller")
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server ${SERVER_PORT} is watching you`);
});

massive(CONNECTION_STRING)
  .then(dbInst => {
    app.set("db", dbInst);
  })
  .catch(err => console.log(err));


app.get("/api/products", productsCtrl.getAll)

app.get("/api/products/:id", productsCtrl.getOne)

app.post("/api/products", productsCtrl.create)

app.put("/api/products/:id", productsCtrl.update)

app.delete("/api/products/:id", productsCtrl.delete)