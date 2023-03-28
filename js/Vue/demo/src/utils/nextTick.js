export const nextTick=(function(){
    const callbacks=[];
    let pending=false;
    let timerFunc;

    function nextTickHandler(){
        pending=false;
        const copies=callbacks.slice(0);
        callbacks.length=0;
        for(let i=0;i<copies.length;i++){
            copies[i]();
        }
    }

    if(typeof Promise!=='undefined' && isNative(Promise)){
        var p=Promise.resolve();
    }
})
