import { Router } from "express"
import { createProduct, getProductById, getProducts } from "./handlers/product"
import { body } from "express-validator"
import { handleInputError } from "./middleware"
const router = Router()

//Routing
router.get('/', getProducts)
router.get('/:id', getProductById)

router.post('/',
  body('name').notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
  body('price')
    .isNumeric().withMessage('Valor no válido')
    .notEmpty().withMessage('el precio del Producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no válido'),
  handleInputError,
  createProduct
)

router.put('/', (req, res) => {
  res.json('Desde PUT')
})

router.patch('/', (req, res) => {
  res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
  res.json('Desde DELETE')
})

export default router
