
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const result = await Category.findAll({
      include: [{ model: Product }]
    });
    res.json({ status: "success", payload: result });
  } catch (err) {
    res.status(400).json({ status: "error", msg: err.message });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const result = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    }
    )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await Category.create(req.body, {
      include: [{ model: Product }],
    }
    )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
});

router.put('/:id', async (req, res) => {
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
