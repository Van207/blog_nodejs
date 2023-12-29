const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
	extname: '.hbs' 	// Config file name handlebars
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, './resources/views'));

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/tin-tuc', (req, res) => {
	res.render('news')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})