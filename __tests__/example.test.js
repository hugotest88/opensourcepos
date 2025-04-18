describe('Basic Test Suite', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('string operations', () => {
    const str = 'hello';
    expect(str.toUpperCase()).toBe('HELLO');
  });

  test('array operations', () => {
    const arr = [1, 2, 4];
    expect(arr).toHaveLength(3);
    expect(arr).toContain(2); 
  });
});
