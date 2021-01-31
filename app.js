const express = require('express');
const bodyParser = require("body-parser");
const authRouter = require('./routes/authRouter');
const mysql = require('mysql2');

const app = express();
const port = process.env.DB_HOST || 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mysql.createConnection({
      connectionLimit: 5,
      host: "localhost",
      user: "root",
      database: "test",
      password: "Gjmmjg123"
    })
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  } catch (e) {
    console.log('some error', e)
  }
}

start()
//
// const pool = mysql.createPool({
//   connectionLimit: 5,
//   host: "localhost",
//   user: "root",
//   database: "test",
//   password: "Gjmmjg123"
// });
//
//
// app.get('/', function (req, res) {
//   res.send('Main page')
// })
//
// app.get("/users", function(req, res){
//   pool.query("SELECT * FROM users", function(err, data) {
//     if(err) return console.log(err);
//     res.send(data);
//   });
// });
//
//
//
// app.get('/products/list', function (req, res) {
//   pool.query("SELECT * FROM products",  function(err, data) {
//     if(err) return console.log(err);
//     res.send(data);
//   });
// })

// app.post('./createProduct',  async function (req, res) {
//
//   if(!req.body) return res.sendStatus(400);
//
//   const product = {
//     name: req.body.name,
//     price: req.body.price,
//     category: req.body.category_id,
//     inStock: req.body.inStock
//   }
//
//   pool.query(
//       "INSERT products(name, price, category_id, inStock) VALUES (?,?,?,?)",
//       [product.name, product.price, product.category, product.inStock],
//       function (err,data
//       ) {
//     if(err) return console.log(err);
//         res.send('User create')
//   })
//
// })

