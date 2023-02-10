const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());         //支持编码为JSON的请求消息体；
app.use(bodyParser.urlencoded({extended:true}))     //支持编码为表单的请求消息体

const articles=[{title:'战争与和平'},{title:'三体'}];

app.set('port',process.env.PORT||3000);

app.get('/articles',(req,res,next)=>{
    res.send(articles);
    res.send("OK");
});

app.post('/articles',(req,res,next)=>{
    res.send("OK");
});


app.get('/articles/:id',(req,res,next)=>{
    const id=req.params.id;
    console.log("Fetching:",id);
    res.send(articles[id]);
});

app.delete('/articles/:id',(req,res,next)=>{
    const id=req.params.id;
    console.log("Deleting:",id);
    delete articles[id];
    res.send({message:"Deleted."});
});

app.listen(app.get('port'),()=>{
    console.log('App started on port',app.get('port'));
});

module.exports=app;




