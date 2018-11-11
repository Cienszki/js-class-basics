function Smartphone(brand, price, colour){
    this.brand = brand;
    this.price = price;
    this.colour = colour;
}
Smartphone.prototype.logInfo = function(){
    console.log('This smartphone is made by ' + this.brand + ' it costs ' + this.price + ' and it has ' + this.colour + ' colour.');
}

var iPhoneX = new Smartphone('Apple', '1000$', 'black');
var samsungS9 = new Smartphone('Samsung', '900$', 'silver');
var nokia3310 = new Smartphone('Nokia', '10$', 'blue');

iPhoneX.logInfo();
samsungS9.logInfo();
nokia3310.logInfo();