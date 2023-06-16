describe('UserService', () => {
  jest.setTimeout(240_000)

  // it('should return list of enviroments when get all', async () => {
  //   const container = await new MySqlContainer().start();

  //   const client = await createConnection({
  //     host: container.getHost(),
  //     port: container.getPort(),
  //     database: container.getDatabase(),
  //     user: container.getUsername(),
  //     password: container.getUserPassword(),
  //   });

  //   const [rows] = await client.execute('SELECT 1 as res');
  //   expect(rows).toEqual([{ res: 1 }]);

  //   await client.end();
  //   await container.stop();
  // });
})
