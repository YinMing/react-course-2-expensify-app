const add = (a, b) => a + b;
const generateGreeting = (name='Anonymous') => `Hello ${name} !`;

test('should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
    
    // if(result !== 7)
    // {
    //     throw new Error(`You added 4 abd 3. The result was ${result}. Expect 7`);
    // }
});

test('should get greeeting msg', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe(`Hello Mike !`);
});

test('should get greeeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe(`Hello Anonymous !`);
});