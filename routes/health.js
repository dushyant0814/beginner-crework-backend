const { Router, Request, Response } = require('express');
const router = Router();

//CRUD operations
//CREATE READ UPDATE DELETE => REST APIs
//GET => READ, POST => CREATE , PATCH/PUT => UPDATE, DELETE => DELETE
//Router, Controller, Processor, Manager
router.get('/', (req, res) => {
  res.json({ success: true });
});

router.post('/health', (req, res) => {
  console.log(req.body);
  const data = req.body.name + ' 1234 ';
  res.json({ success: true, data });
});

module.exports = router;
