class Currency{
    constructor(rate,baserate){
        this.rate=rate;
        this.baserate=baserate;
    }

    roundTwoDecimals(amount){
        return Math.round(amount*100)/100;
    }

    rateToBaserate(){
        return this.roundTwoDecimals((this.baserate/this.rate)*100);
    }

    baserateToRate(){
        return this.roundTwoDecimals((this.rate/this.baserate)*100);
    }
}

//错误写法,Node不允许重写exports
//exports=Currency;


//module不加s；
module.exports=Currency;