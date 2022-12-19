const test1 = require("./sum2")
test("The Result of Sum 1: ", () => {
    expect(test1()).toBe(0)
})
test("The Result of Sum 2: ", () => {
    expect(test1(6,65,90,0)).toBe(161)
})
test.skip("The Result of Sum 3: ", () => {
    expect(test1(77,.89)).toBe(77.89)
})
test.only("The Result of Sum 4: ", () => {
    expect(test1()).toBe(0)
})