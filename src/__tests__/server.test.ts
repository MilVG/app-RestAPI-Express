
import { conectionDB } from "../server";
import db from "../config/db";



describe('connectDB', () => {
  it('should handle database connection error', async () => {
    jest
      .spyOn(db, 'authenticate')
      .mockRejectedValueOnce(new Error('Hubo un error error al conectar a la BD'))
    const consoleSpy = jest.spyOn(console, 'log')
    await conectionDB()

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Hubo un error al conectar a la BD')
    )
  })
})
