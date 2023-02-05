const canadianDollor=0.91;

function roundTwo(amount){
    return Math.round(amount*100)/100;
}

exports.canadianToUS=canadian=>{
    return roundTwo(canadian*canadianDollor);
}

exports.UStoCanadian=us=>{
    return roundTwo(us/canadianDollor);
}