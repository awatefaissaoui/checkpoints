const express = require('express')

// app.get('/' ,(req,res)=>{
//     res.status(200).send('bonsoir')

// })

// app.all('/hello' ,(req,res ,next)=>{
//     res.status(200).send('hello')
//     next()

// })
const app = express()
app.set('view engine',"ejs")
app.set('views',__dirname+"/views")
app.use(express.static('public'))

const TestTimeMiddlware = (req,res ,next )=>{

    const currentDay = new Date().getDay()
    const currentHour = new Date().getHours();
    
if(currentDay >=1 && currentDay <=5 && currentHour >= 9 && currentHour <=17)
next()
else {
    res.render("error")

}

}

app.get('/',TestTimeMiddlware,(req,res)=>{
    res.render("home")
})

app.get('/services',TestTimeMiddlware,(req,res)=>{
    res.render("services")
})


app.get('/contact',TestTimeMiddlware,(req,res)=>{
    res.render("contact")

})














app.listen(5000,()=>{
    console.log('server runing at port  5000')
})

