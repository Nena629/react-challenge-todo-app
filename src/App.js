const express= require('express')
const app= express()
const port= 3000
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

function middlewareActivated(req, res, next) {
    const date = new Date()
    const day = date.getDay()
    const hour = date.getHours()
    day === 0 || day === 6 ? res.end('application hors service') :
    (hour < 9 || hour > 17 ? res.end('application hors serevice') : '')
    next()
}

app.get('/', middlewareActivated, (req,res) => {
    res.render('Home',{
        title:'the title',
        message:'Hello'
    })
})
app.get('/Home', (req,res) => {
    res.render('Home',{
        title:'the title',
        message:'This is the home page'
    })
})
app.get('/Services', (req,res) => {
    res.render('Services',{
        title:'the title',
        message:'Our services'
    })
})
app.get('/Contact', (req,res) => {
    res.render('Contact',{
        title:'the title',
        message:'Contact us'
    })
})

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})