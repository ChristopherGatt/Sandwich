const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
})

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
    res.status(200).json(oneCategory)
  } catch (err) {
    res.status(500).json(err)
  }
})

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(400).json(err)
  }
})

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    })
    res.status(200).json(updateCategory)
  } catch (err) {
    res.status(400).json(err)
  }
})

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    })
    res.status(200).json(deleteCategory)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
