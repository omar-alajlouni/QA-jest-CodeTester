const thesum = (num,num2,tax=.25) => {
    return num+(num2||null)*tax;  // ||null: patteren , truthy & fulsthy
}
module.exports = thesum