import { welcome } from './bem-vindo';

describe('Função welcome', () => {
  it('deve retornar "Bem-vindo"', () => {
    expect(welcome()).toBe('Bem-vindo');
  });
});
