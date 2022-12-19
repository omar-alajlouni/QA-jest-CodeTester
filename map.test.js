let basic_info = require('./map')
test("check if my info have the property name", () => {
    //let myInfo = { name: "abedalraheem", age: 29, nationallity: "jordanian", };
    expect(basic_info).toHaveProperty("name");
});
test("check if my info have the property age", () => {
    //let myInfo2 = { name: "abedalraheem", age: 29, nationallity: "jordanian", };
    expect(basic_info).toHaveProperty("age", 25);
});