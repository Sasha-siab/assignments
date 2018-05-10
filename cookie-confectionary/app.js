const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(cookieParser())

let chocolate = 0
let lemon = 0
let sugar = 0

app.get('/', (req, res)=>{
	chocolate = req.cookies.chocolate || 0
	lemon = req.cookies.lemon || 0
	sugar = req.cookies.sugar || 0

return res.render('confectionary', {chocolate, lemon, sugar})
})

app.post('/chocolate', (req, res)=>{
	chocolate++
	res.cookie('chocolate', chocolate, {maxAge: 1000000 })
	res.redirect('/')
})


app.post('/lemon', (req, res)=>{
	lemon++
	res.cookie('lemon', lemon, {maxAge: 1000000 })
	res.redirect('/')
})


app.post('/sugar', (req, res)=>{
	sugar++
	res.cookie('sugar', sugar, {maxAge: 1000000 })
	res.redirect('/')
})

app.post('/startOver', (req,res)=>{
	let chocolate = 0
    let lemon = 0
    let sugar = 0
    res.cookie('chocolate', chocolate, {maxAge: 1000000 })
    res.cookie('lemon', lemon, {maxAge: 1000000 })
    res.cookie('sugar', sugar, {maxAge: 1000000 })

    res.redirect('/')
})


app.listen(PORT, ()=>{
	console.log('server running')
})

























