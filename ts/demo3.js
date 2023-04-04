var age = 18;
console.log(age);
var myname = "Martin Wang";
console.log(myname);
//enum类型
var SEASONS;
(function (SEASONS) {
    SEASONS[SEASONS["Spring"] = 1] = "Spring";
    SEASONS[SEASONS["Summber"] = 2] = "Summber";
    SEASONS["Autumn"] = "Happy";
    SEASONS[SEASONS["Winter"] = 3] = "Winter";
})(SEASONS || (SEASONS = {}));
;
console.log(SEASONS.Autumn);
//any类型:不建议使用
var tran = 10;
tran = "10";
tran = true;
console.log(tran);
function serachSisiter(age) {
    return "\u627E\u5230\u4E86".concat(age, "\u5C0F\u59D0\u59D0");
}
console.log(serachSisiter(18));
