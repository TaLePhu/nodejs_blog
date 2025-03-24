import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);// lấy URL của file hiện tại, chuyển đổi URL thành đường dẫn thực tế
const __dirname = path.dirname(__filename);// lấy thư mục chứa file hiện tại

const app = express();
const port = 3000;

//link static file
app.use(express.static(path.join(__dirname, 'public')));// vd: Nếu có file public/style.css, thì có thể truy cập qua đường dẫn http://localhost:3000/style.css


//log request HTTP
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({   //Khai báo express-handlebars làm template engine với phần mở rộng .hbs
  extname: '.hbs'
}));
app.set('view engine', '.hbs'); //Xác định Handlebars làm view engine mặc định.
app.set('views', path.join(__dirname, 'resources/views'));// Đặt thư mục chứa file giao diện (.hbs).

console.log('Path: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
