function createSquare(config) {
    var newSquare = {
        color: "White",
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (!config.area) {
        newSquare.area = config.width * config.height;
    }
    return newSquare;
}
var mySquareConfig = {
    width: 100,
    height: 20,
    color: "Green"
};
console.log(createSquare(mySquareConfig));
