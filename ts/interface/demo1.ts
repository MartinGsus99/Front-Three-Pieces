interface LabelValue{
    label:string,
    key:string,
    fontSize?:number        //可选属性
    readonly color:"black"  //只读属性
}

interface SquareConfig{
    color?:string,
    width:number,
    height:number,
    area?:number,
}

function createSquare(config:SquareConfig):{color:string; area:number}{
    let newSquare={
        color:"White",
        area:100
    };

    if(config.color){
        newSquare.color=config.color;
    }
    if(!config.area){
        newSquare.area=config.width*config.height;
    }
    return newSquare;
}

var mySquareConfig={
    width:100,
    height:20,
    color:"Green",
}

console.log(createSquare(mySquareConfig));
