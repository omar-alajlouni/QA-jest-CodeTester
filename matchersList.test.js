const myDataCheck = require("./matchersList");
test("to check if the length of my array is 7 ", () => {
    expect(myDataCheck.length).toBe(7); //.toHaveLength(7); it's same
});
test("to check if my array contains the name ofahmad", () => {
    expect(myDataCheck).toContain("ahmad");
});
test.only("to check if my array dose not contains thename abed", () => {
    expect(myDataCheck).not.toContain("abed");
});
test(" same as pervious one to check if my arraydose not contains the name abed", () => {
    for (let i = 0; i < myDataCheck.length; i++) {
        expect(myDataCheck).not.toContain("abed");
    }
});
test(" tocheck if my array dosent have any number inside it", () => {
    for (let i = 0; i < myDataCheck.length; i++) {
        expect(isNaN(myDataCheck[i])).toBe(true); //NaN not a number
    }
});
test(" check if my array first element is larger than 1", () => {
    for (let i = 0; i < myDataCheck.length; i++) {
        expect(myDataCheck[i]).toBeGreaterThan(15)
    }
});
test(" check if my array first element is larger than 1", () => {
    for (let i = 0; i < myDataCheck.length; i++) {
        expect(myDataCheck[0]).toBeLessThanOrEqual(1)
    }
});