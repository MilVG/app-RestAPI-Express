import { Router } from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateProductPatchAvailability, updateProductPut } from "./handlers/product"
import { body, param } from "express-validator"
import { handleInputError } from "./middleware"
const router = Router()

/**
 * @swagger
 * components:
 *    schemas:
 *      Product:
 *          type: object
 *          properties:
 *             id:
 *                type: integer
 *                description: The Product ID
 *                example: 1
 *             name:
 *                type: string
 *                description: The Proudct name
 *                example: MonitorCurvo de 41 Pulgadas
 *             price:
 *                type: number
 *                description: The Proudct price
 *                example: 300
 *             availability:
 *                type: boolean
 *                description: The Proudct availability
 *                example: true  
*/

/**
 * @swagger
 *  /api/products:
 *    get:
 *        summary: Get a list of products
 *        tags:
 *             - Products
 *        description: Return a list of products
 *        responses:
 *            200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Product'
*/
//Routing
router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Get a product by ID 
 *    tags:
 *      - Products
 *    description: Return a product based on its unique ID 
 *    parameters:
 *      - in: path
 *        name: id 
 *        description: The ID of the product to retrieve
 *        required: true 
 *        schema:
 *          type: integer
 *    responses:
 *        200:
 *          description: Successful Response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 *        404:
 *          description: Not found
 *        400:
 *          description: Bad Request - Invalid ID
 */
router.get('/:id',
  param('id').isInt().withMessage('ID no valido'),
  handleInputError,
  getProductById
)


/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     tags:
 *       - Products
 *     description: Returns a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Monitor Curvo 49 Pulgadas"
 *               price:
 *                 type: number
 *                 example: 399
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad Request - Invalid input data
 */
router.post('/',
  body('name').notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
  body('price')
    .isNumeric().withMessage('Valor no válido')
    .notEmpty().withMessage('el precio del Producto no puede ir vacio')
    .custom(value => value > 0).withMessage('Precio no válido'),
  handleInputError,
  createProduct
)

/**
* @swagger
*   /api/products/{id}:
*       put:
*        summary: Updates a product with user input
*        tags:
*          - Products
*        description: Returns the updated product 
*        parameters:
*         - in: path
*           name: id
*           description: The ID of the product to retrieve
*           required: true
*           schema:
*             type: integer
*        requestBody:
*           required: true
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                     name:
*                       type: string
*                       example: "Monitor Curvo 49 Pulgadas"
*                     price:
*                       type: number
*                       example: 344
*                     availability:
*                       type: boolean
*                       example: true
*        responses:
*         201:
*           description: Successful response
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Product'
*         400:
*           description: bad Request - Invalid ID or Invalid input data
*         404:
*           description: Product not found
*/

router.put('/:id',
  param('id').isInt().withMessage('ID no válido'),
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

/**
 * @swagger
 *  /api/products/{id}:
 *    patch:
 *      summary: Update Product availability
 *      tags:
 *        - Products
 *      description: Returns the updated availability
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *         201:
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Product'
 *         400:
 *           description: bad Request - Invalid ID or Invalid input data
 *         404:
 *           description: Product not found

*/

router.patch('/:id',
  param('id').isInt().withMessage('ID no valido'),
  handleInputError,
  updateProductPatchAvailability
)

router.delete('/:id',
  param('id').isInt().withMessage('ID no valido'),
  handleInputError,
  deleteProduct
)

export default router
