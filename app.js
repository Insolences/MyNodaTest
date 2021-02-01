const express = require('express');
const bodyParser = require("body-parser");
const db = require('./models')

const app = express();
const port = process.env.DB_HOST || 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const authRouter = require('./routes/authRouter');

app.use('/auth', authRouter)

db.sequelize.sync().then(()=>{
  app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`);

  })
})


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

