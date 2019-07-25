module.exports = {
  create: (req, res, next) => {
    const dbInst = req.app.get("db");
    const { name, description, price, image_url } = req.body;

    dbInst
      .create_product([name, description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Nupe" });
        console.log(err);
      });
  },
  getOne: (req, res, next) => {
    const dbInst = req.app.get("db");
    const { id } = req.params;

    dbInst
      .read_product(id)
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Nupe" });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    const dbInst = req.app.get("db");

    dbInst
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Nupe" });
        console.log(err);
      });
  },
  update: (req, res, next) => {
    const dbInst = req.app.get("db");
    const {params, query} = req

    dbInst
      .update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Nupe" });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const dbInst = req.app.get("db");
    const {id} = req.params

    dbInst
      .delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Nupe" });
        console.log(err);
      });
  }
};
