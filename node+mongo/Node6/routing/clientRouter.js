const express = require('express');
const contollerClient = require('../contoller/clientController ' )
var router = express.Router();

router.post("/AddClient", contollerClient.add);
//router.put("/:id/updateData", contollerClient.update); 

//router.get("/GetData", contollerItem.Get);
router.get("/:id/GetData", contollerClient.GetById);
//router.get("/:id/GetDataP", contollerItem.GetByPrice);
module.exports = router;