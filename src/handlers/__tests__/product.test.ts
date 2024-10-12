import request from "supertest";
import server from "../../server";

describe('POST /api/products', () => {
  it('shoul create a new product', async () => {
    const response = await request(server).post('/api/products').send({
      name: "mouse-Testing",
      price: 50
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('data')

    expect(response.status).not.toBe(404)
    expect(response.status).not.toBe(200)
    expect(response.body).not.toHaveProperty('errors')
  })
})
