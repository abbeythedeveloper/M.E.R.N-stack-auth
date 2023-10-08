const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
// const authRoute = require('./Routes/authRoutes')

const app = express();
//db connect
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Database has been Connected ✅')
}).catch((err) => {
    console.log('Database has !been Connected ❌',err);
}); 

 
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use(
    cors({
        origin:'https://auth-frontend-dusky.vercel.app' ,  //allow to access from this origin only
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    })
);
// Enable CORS for your frontend domain
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://auth-frontend-dusky.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


// app.use('/authRoutes', authRoute)

app.use('/', require('./Routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is listening on port ${port} ✅`))