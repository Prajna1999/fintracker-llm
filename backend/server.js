require('dotenv').config();

const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/userRoutes');

const app=express();

// middleware for logging requests
app.use(morgan('dev'));

// middleware for parsing json objects in req body
app.use(bodyParser.json());

// middlware for parsing urlCencoded bodies
app.use(bodyParser.urlencoded({extended:true}));

// middleware for use routes
// app.use('/api/v1', userRoutes);

// middleware for handling error
app.use((err, req, res, next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!')
});

const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
});