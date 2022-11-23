function addLoadEvent(func){
    var oldOnload=window.onload;
    if(typeof window.onload!='function')
    {
        window.onload=func;
    }else
    {
        window.onload=function(){
            oldOnload();
            func();
        }
    }
}

function positionHider(){
    if(!document.getElementById) return false;
    if(!document.getElementById("img")) return false;

    var elem1=document.getElementById("img");
    elem1.style.position="absolute";
    elem1.style.left="0px";
    moveElement(540,0.01,"img");

}


function moveElement(target_X,timeInterval,elemName){
    if(!document.getElementById) return false;
    if(!document.getElementById(elemName)) return false;
    var elem=document.getElementById(elemName);
    let x=parseInt(elem.style.left);
    let y=parseInt(elem.style.top);
    if(x==target_X)
    {
        return true;
    }
    if(x<target_X)
    {
        x++;
    }

    elem.style.left=x+"px";
    var repeat="moveElement("+target_X+","+timeInterval+",'"+elemName+"')"
    movement=setTimeout(repeat,timeInterval);
}

addLoadEvent(positionHider);