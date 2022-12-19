const testName = require("./name")
test.skip("The Name Printed: ", () => {
    expect(testName("omar")).toBe("ali")
})