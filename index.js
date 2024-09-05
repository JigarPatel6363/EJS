const express =require('express')


const app = express();
const Prot = 8000;

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')    
})
app.get('/about',(req,res)=>{
    res.render('about')    
})

app.get('/from',(req,res)=>{
    res.render('from')    
})



app.listen(Prot,()=>{
    console.log(`server started on http://localhost:${Prot}`)
});