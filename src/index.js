require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const productRouter = require('./routes/product.routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log('database not connected', err);
  });

app.use('/product', productRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running on port ' + process.env.SERVER_PORT);
});
