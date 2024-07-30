const Controller = require("../controller/controller.js");
const router = require("express").Router()

router.get('/task', Controller.findTask);
router.get('/task/:id', Controller.findTaskone);
router.post('/task/post', Controller.createTask);
router.put('/task/update/:id', Controller.updateTask)
router.delete('/task/delete/:id', Controller.deleteTask)

module.exports = router;