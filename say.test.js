//this file foe QA tester
const sayfile = require('./say')
test("test ayfirstJest function msg", () => {
    expect(sayfile()).toBe("welcome")
},)