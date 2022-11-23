function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message1")) return false;

    var elem1=document.getElementById("message1");
    elem1.style.position="absolute";
    elem1.style.left="50px";
    elem1.style.top="100px";
    
    moveElement(300,300,1,"message1");

    if(!document.getElementById("message2")) return false;
    var elem2=document.getElementById("message2");
    elem2.style.position="absolute";
    elem2.style.left="50px";
    elem2.style.top="300px";
    moveElement(300,300,1,"message2");
}

function moveMessage(){
    var elem=document.getElementById("message");
    let xpos=parseInt(elem.style.left);
    if(xpos==2000)
    {
        return true;
    }
    if(xpos<2000)
    {
        xpos++;
    }
    if(xpos>2000)
    {
        xpos--
    }
    if(ypos<2000)
    {
        ypos++
    }
    if(ypos>2000)
    {
        ypos--
    }

    elem.style.left=xpos+"px";
    movement=setTimeout("moveMessage()",1);
}

function moveElement(target_X,target_Y,timeInterval,elemName){
    if(!document.getElementById) return false;
    if(!document.getElementById(elemName)) return false;
    var elem=document.getElementById(elemName);
    console.log(elem);
    let x=parseInt(elem.style.left);
    let y=parseInt(elem.style.top);
    if(x==target_X && y==target_Y)
    {
        return true;
    }
    if(x<target_X)
    {
        x++;
    }
    if(y<target_Y)
    {
        y++;
    }
    elem.style.left=x+"px";
    elem.style.top=y+"px";
    var repeat="moveElement("+target_X+","+target_Y+","+timeInterval+",'"+elemName+"')"
    movement=setTimeout(repeat,timeInterval);
}

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


const elemname='message';
addLoadEvent(positionMessage);
// addLoadEvent(moveMessage)
// addLoadEvent(moveElement);