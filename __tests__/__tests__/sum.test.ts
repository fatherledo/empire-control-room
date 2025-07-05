// __tests__/sum.test.ts

function suma(a: number, b: number): number {
  return a + b;
}

describe('Test de ejemplo suma()', () => {
  it('1 + 2 debe ser 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
});
