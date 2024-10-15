import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.2',
    tags: [
      {
        name: 'Products',
        description: 'API operations related to products'
      }
    ],
    info: {
      title: 'REST API Node.js / Express / Typescript',
      version: '1.0.0',
      description: 'API Docs for Products'
    }
  },
  apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `
  .topbar-wrapper .link{
    content: url('https://lh3.googleusercontent.com/a/ACg8ocIUV8arDiuQY7xdVXZdoDcrRnZ32JL5m5okq3_zxlwHoZcCUrra=s288-c-no');
    height:150px;
    width: auto;
  }
  .swagger-ui .topbar{
    background-color:#2b3b45
  }
`,
  customSiteTitle: 'Documentación REST API Express / Typescript'
}
export default swaggerSpec
export {
  swaggerUiOptions
}
