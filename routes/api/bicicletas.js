

let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI");

router.get("/", BicicletaControllerAPI.bicicleta_list);
router.post("/create", BicicletaControllerAPI.bicicleta_create);
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);
router.put("/update", BicicletaControllerAPI.bicicleta_update);

module.exports = router;