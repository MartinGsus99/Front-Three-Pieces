const express = require('express');
const bodyParser = require('body-parser');
const read = require('node-readability');
const url = 'http://www.manning.com/cantelon2/';


const { Article } = require('../db');

const articles = [{ title: 'NodeJS入门' }, { title: 'VueJS入门' }, { title: '深入浅出VueJS' }];


const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/articles', (req, res, next) => {
    Article.all((err, articles) => {
        if (err) return next(err);
        res.format({
            html:()=>{
                res.render('articles.ejs',{articles:articles});
            },
            json:()=>{
                res.send(articles);
            }
        })
    })
});

app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    Article.find(id, (err, article) => {
        if (err) return next(err);
        res.send(article);
    })
});



app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    Article.delete(id, (err) => {
        if (err) return next(err);
        res.send({ message: 'Deleted.' });
    });
});

app.post('/articles', (req, res, next) => {
    const url=req.body.url;
    read(url, (err, result) => {
        if(err||!result) res.status(500).send('Error downloding...');
        Article.create({
            title: result.title, 
            content: result.content
        },(err,article)=>{
            if(err) return next(err);
            res.send('OK');
        })
    });
    
});

app.listen(app.get('port'), () => {
    console.log('App started on port ', app.get('port'));
});

module.exports = app;