describe('testa a função sum', () => {
    it('deve retornar o resultado da soma', () => {
      expect(sum(4, 5)).toBe(9);
      expect(sum(0, 0)).toBe(0);
    });
    it('deve disparar um erro caso receba como parâmetro uma string', () => {
      expect(() => sum(4, '5')).toThrowError();
      expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
  })

  describe('testa a função myRemove', () => {
    it('deve retornar um array removendo o item correto', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });

  .toContain(item)
Use .toContain quando você deseja verificar se um item está em um array. Para testar os itens no array, este usa ===, uma verificação de igualdade estrita. .toContain também pode verificar se uma string é uma substring de outra string.

Por exemplo, se getAllFlavors() retorna um array de sabores e você quer ter certeza que lime está lá, você pode escrever:

test('the flavor list contains lime', () => {
  expect(getAllFlavors()).toContain('lime');
});
.toContainEqual(item)
Use .toContainEqual quando você deseja verificar que um item com uma estrutura específica e valores está contido em um array. Para testar os itens no array, este "matcher" recursivamente verifica a igualdade de todos os campos, em vez de verificar a identidade do objeto.

describe('my beverage', () => {
  test('is delicious and not sour', () => {
    const myBeverage = {delicious: true, sour: false};
    expect(myBeverages()).toContainEqual(myBeverage);
  });