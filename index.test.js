const holaMundo = require('./index');

test("Debe retornar 'Hola mundo'", () => {
    expect(holaMundo()).toBe("Hola mundo");
});