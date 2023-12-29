1. Khởi tạo npm
	npm init

2. Cài đặt express
	npm install express

3. Cài đặt nodemon -> lắng nghe sự thay đổi file -> ko cần chạy lại server
	npm install nodemon --save-dev 	(Lưu vào dev)
	Thêm
	"scripts": {
		"start": "nodemon --inspect index.js",
		"test": "echo \"Error: no test specified\" && exit 1"
	},

	=> node start

4. Cài Morgan -> theo dõi log request
	npm install morgan --save-dev
	app.use(morgan('combined'));

5. Cài Handlebars (Template engine)
	npm i express-handlebars
	
	SETUP:
	const handlebars = require('express-handlebars');
	app.engine('hbs', handlebars.engine({
		extname: '.hbs'
	}));
	app.set('view engine', '.handlebars');
	app.set('views', './views');
	app.set('views', path.join(__dirname, './resources/views'));
	
6. Cấu hình SCSS
	npm i node-sass
	Thêm script
	"watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css",