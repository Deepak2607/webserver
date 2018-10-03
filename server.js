const express= require('express');
const hbs= require('hbs');

const app=express();

const port= process.env.PORT || 8000;


app.use('/public',express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'About Page',
        year:new Date().getFullYear()
    });
});

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title:'Home Page',
        year:new Date().getFullYear(),
        message:'Welcome to my Website'
    });
});


//app.get('/info',(req,res)=>{
//    res.send({
//        name:'Deepak Kumrawat',
//        address:{
//            college:'ABV-IIITM Gwalior',
//            location:'Morena Link Road',
//        }
//    });
//});

app.listen(port, ()=> {
    console.log(`Local server started on port ${port}` );
});