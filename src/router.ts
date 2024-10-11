import { Router } from "express"
import { createProduct, getProductById, getProducts, updateProductPatchAvailability, updateProductPut } from "./handlers/product"
import { body, param } from "express-validator"
import { handleInputError } from "./middleware"
const router = Router()

//Routing
router.get('/', getProducts)
router.get('/:id',
  param('id').isInt().withMessage('ID no valido'),
  handleInputError,
  getProductById
)

router.post('/',
  body('name').notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
  body('price')
    .isNumeric().withMessage('Valor no válido')
    .notEmpty().withMessage('el precio del Producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no válido'),
  handleInputError,
  createProduct
)

router.put('/:id',
  body('name').notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
  body('price')
    .isNumeric().withMessage('Valor no válido')
    .notEmpty().withMessage('el precio del Producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no válido'),
  body('availability')
    .isBoolean().withMessage('Valor para disponibilidad no válido'),
  handleInputError,
  updateProductPut
)

router.patch('/:id',
  param('id').isInt().withMessage('ID no valido'),
  handleInputError,
  updateProductPatchAvailability
)

router.delete('/', (req, res) => {
  res.json('Desde DELETE')
})

export default router
