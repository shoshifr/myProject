const express = require('express');
const contollerItem = require('../contoller/itemsContoller')
var router = express.Router();

router.post("/AddItem", contollerItem.add);
router.put("/:id/updateData", contollerItem.update);

router.get("/GetData", contollerItem.Get);
router.get("/:id/GetData", contollerItem.GetById);
router.get("/:id/GetDataP", contollerItem.GetByPrice);
module.exports = router;