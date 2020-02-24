import { Client } from '../Client';

describe('Api Client', () => {
  test('should exist', async () => {
    expect(Client).toBeDefined();
    expect(Client.DecodeVin).toBeDefined();
  });

  test('action DecodeVin', async () => {
    const result = Client.DecodeVin('');
    expect(result).toBeDefined();
  });
});
