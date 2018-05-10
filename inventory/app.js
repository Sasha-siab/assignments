const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

let message = "";



//____________________________________CREATE A DATABASE

const sequelize = new Sequelize('sqz', 'postgres', 'branka123',{
	host: 'localhost',
	port: '5432',
	dialect: 'postgres'
})




//____________________________________CREATE A TABLE

const Shoe = sequelize.define('shoe',
  {
	name: Sequelize.STRING,
	material: Sequelize.STRING,
	size: Sequelize.INTEGER,
	color: Sequelize.STRING,
	qty: Sequelize.INTEGER
  } 
)
sequelize.sync()   




//____________________________________CREATE A RECORD

// Shoe.create({
// 		name: "Heeled sandals",
// 		material: "Ribber",
// 		size: 8,
// 		color: "Dark blue",
// 		qty: 6
// })


// Shoe.create({
// 		name: "Loafers",
// 		material: "leather",
// 		size: 8,
// 		color: "Brown",
// 		qty: 4
// })


// Shoe.create({
// 		name: "Sneakers",
// 		material: "canvas",
// 		size: 9,
// 		color: "Purple multi",
// 		qty: 14
// })



//____________________________________SEARCH A MODEL

app.get('/search', (req, res)=>{
	let s = req.query.search
	Shoe.findAll({
		where: 
		{
			name:
			{
				$iLike: `${s}`
			}
		}
	})
	.then(rows =>{
		if(rows == ""){
			return res.render('shoes', {rows, message: "Not found"})
		}

		return res.render('shoes', {rows, message})
	})
})




  

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//____________________________________ROUTES

app.get('/', (req, res)=>{
	Shoe.findAll({ order: ['id']}).then((rows)=>{
	return rows;
})
	.then((rows)=>{
		return res.render('shoes', {rows, message})
	})
})


//____________________________________ADD NEW MODEL


app.post('/add', (req, res)=>{
	Shoe.create({
		name: req.body.name,
		material: req.body.material,
		size: req.body.size,
		color: req.body.color,
		qty: req.body.qty
	})
	.then(row =>{
		return res.redirect('/')
	})
})


//____________________________________ADD NEW MODEL

app.post('/edit/:id', (req, res)=>{
	let id = req.params.id;
	Shoe.findById(id)
	.then(row =>{
		return row
	})
	.then(row =>{
		return res.render('edit-model', {row})
	})
})


//____________________________________UPDATE NEW MODEL

app.post('/update', (req,res)=>{
	let id = req.body.id
	Shoe.findById(id)
	.then((row)=>row.update({
		name: req.body.name,
		material: req.body.material,
		size: req.body.size,
		color: req.body.color,
		qty: req.body.qty
	}))
	.then(row =>{
		return res.redirect('/')
	})
})


//____________________________________DELETE MODEL

app.post('/delete/:id', (req, res)=>{
	let id = req.params.id
	Shoe.findById(id)
	.then(row => row.destroy(row))
	.then(()=>{
		return res.redirect('/')
	})
})



app.listen(8080, ()=>{
	console.log("Sequelize is in effect...")
})


