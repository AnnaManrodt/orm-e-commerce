const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',  async(req, res) => {
  try {
    const result = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.json({ status: "success", payload: result });
  } catch (err) {
    res.status(400).json({ status: "error", msg: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Tag.findByPk(req.params.id, {
      include: [{ model: Product  }],
    }
    )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await Tag.create(req.body, {
      include: [{ model: Product }],
    }
    )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
});

router.put('/:id', async  (req, res) => {
  try {
    const result = await Category.update(req.params.id, {
      include: [{ model: Product }],
    }
    )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Category.destroy(req.params.id, {
      include: [{ model: Product }],
    }
    )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
});

module.exports = router;
