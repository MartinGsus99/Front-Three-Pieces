const currency=require('./lib/currency');
const Currency=require('./lib/objectCurrency');

const rateChangeEurope=new Currency(6.81,0.93);
const rateChangeUSD=new Currency(6.81,1);

console.log("50 canadian is "+currency.canadianToUS(50)+" US dollars.");

console.log("Today China Yuan: 6.81; Europe Dollar:0.93;")
console.log(rateChangeEurope);

console.log("100￥= ",rateChangeEurope.rateToBaserate(),'€.');
console.log("100€= ",rateChangeEurope.baserateToRate(),'￥.');
console.log("100￥= ",rateChangeUSD.rateToBaserate(),'$.');