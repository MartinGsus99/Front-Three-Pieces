var age:number=18;
console.log(age);

var myname:string="Martin Wang";
console.log(myname);

//enum类型
enum SEASONS{'Spring'=1,'Summber'=2,'Autumn'='Happy','Winter'=3};
console.log(SEASONS.Autumn);

//any类型:不建议使用
var tran:any=10;
tran="10";
tran=true;
console.log(tran);

function serachSisiter(age:number):string{
    return `找到了${age}岁小姐姐`;
}

console.log(serachSisiter(18));