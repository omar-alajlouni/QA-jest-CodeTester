function printName(name) {
    if (name === undefined) { // === let vale and DataType
        name = "Unknown"
        return name
    }
    else if(name.startsWith('o')){
        return " your name start of letter o"
    }
    else{
        return name+" your start name "+name[0]
    }
}
module.exports = printName