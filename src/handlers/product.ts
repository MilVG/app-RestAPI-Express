import { Request, Response } from "express"
import Product from "../models/Product.model"


export const getProducts = async (req: Request, res: Response) => {

  try {
    const products = await Product.findAll({
      order: [
        ['id', 'DESC']
      ],
    })
    res.json({ data: products })
  } catch (error) {
    console.log(error);

  }
}
export const getProductById = async (req: Request, res: Response) => {

  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' })
      return
    }
    res.json({ data: product })
  } catch (error) {
    console.log(error);

  }
}
export const createProduct = async (req: Request, res: Response) => {

  try {
    const product = await Product.create(req.body)
    res.json({ data: product })

  } catch (error) {
    console.log(error);

  }
}
export const updateProductPut = async (req: Request, res: Response) => {

  try {

    //comprobar que exista
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' })
      return
    }

    //actualizar
    await product.update(req.body)
    await product.save()


    res.json({ data: product })

  } catch (error) {
    console.log(error);

  }
}


