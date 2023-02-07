const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    getTitles(res);
}).listen(8000,'127.0.0.1');

//将回调嵌套的功能代码提取出来
function getTitles(res){
    fs.readFile('./data/title.json',(err,data)=>{
        if(err) return hadError(err,res);
        getTemplate(JSON.parse(data.toString()),res);
    });
}

function getTemplate(titles,res){
    fs.readFile('./index.html',(err,data)=>{
        if(err) return hadError(err,res);
        formatHtml(titles,data.toString(),res);
    })
}

function formatHtml(titles,templ,res){
    const html=templ.replace('%',titles.join('</li><li>'));
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html);
}

function hadError(err,res){
    console.log(err);
    res.end("Server Error");
}