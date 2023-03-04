const express=require('express');
const bodyParser=require('body-parser');

const articles=[{title:'NodeJS入门'},{title:'VueJS入门'},{title:'深入浅出VueJS'}];


const app=express();

app.set('port',process.env.PORT||3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(
    '/css/bootstrap.css',
    express.static('node_modules/bootstrap/dist/css/bootstrap.css')
  );

app.get('/articles',(req,res,next)=>{
    res.send(articles);
});

app.get('/articles/:id',(req,res,next)=>{
    const id=req.params.id;
    console.log("Fetching article ",id,".");
    res.send(articles[id]);
});

app.delete('/articles/:id',(req,res,next)=>{
    const id=req.params.id;
    console.log("Deleting article ",id,".");
    delete articles[id];
    res.send({message:'Article has been deleted.'});
});



app.post('/articles',(req,res,next)=>{
    const article={title:req.body.title};
    articles.push(article);
    res.send(articles);
});

app.listen(app.get('port'),()=>{
    console.log('App started on port ',app.get('port'));
});

module.exports=app;