const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const {Client} = require('pg');
const dotenv = require('dotenv')

dotenv.load();
const postgres_user = process.env.DB_USER;
const postgres_pass = process.env.DB_PASS;





const connectionString = 'postgresql://postgres:branka123@localhost:5432/boardapp'
 
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

 // getting info

app.get('/', (req,res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
	client.connect()
	.then(()=>{
		return client.query ('SELECT * FROM messages')
	})
	.then((result)=>{
		return res.render('messages', {result})
	})
})

// to add message 

app.post('/add', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query (`INSERT INTO messages (title, body) values ($1, $2)`, [req.body.title, req.body.body])
})
.then((result)=>{
	return res.redirect('/')
})
})


// to delete message 

app.post('/delete/message/:id', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query ('DELETE FROM messages WHERE id=$1', [req.params.id])
})
.then((result)=>{
	return res.redirect('/')
})
})






app.listen(8080, ()=>{
	console.log('running on port 3000....');
})

