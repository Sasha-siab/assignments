
// VARS

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const {Client} = require ('pg');
const dotenv = require('dotenv');



dotenv.load();
const postgres_user = process.env.DB_USER;
const postgres_pass = process.env.DB_PASS;


const connectionString = 'postgresql://postgres:branka123@localhost:5432/blog'

const app = express();

//  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
	client.connect()
	.then(()=>{
		return client.query ('SELECT * FROM posts')
	})
	.then((result)=>{
		return res.render('posts', {result})
	})
})

// to add comment 

app.post('/add', (req, res)=>{
	let date = new Date();
    date = date.toString();
    const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query (`INSERT INTO posts (name, date, title, body) values ($1, $2, $3, $4)`, [req.body.name, date, req.body.title, req.body.body])
})
.then((result)=>{
	return res.redirect('/')
})
})


// to delete comment 

app.post('/delete/comment/:id', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query ('DELETE FROM posts WHERE id=$1', [req.params.id])
})
.then((result)=>{
	return res.redirect('/')
})
})




// DELETE BTN FOR _COMMENT.EJS FILE IN CASE I NEED IT

//         <form method="POST" action='/delete/comment/<%= result.rows[i].id %>' class="deletebtn">
        
//         <button class="btn-delete"> delete </button> 

//         </form>













///  NODE
app.listen(3000, ()=>{
	console.log('running on port 3000');
})