const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

//db connect
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Database has been Connected ✅')
}).catch((err) => {
    console.log('Database has !been Connected ❌',err);
}); 

app.use(
    cors({
        origin:'https://auth-frontend-dusky.vercel.app/' ,  //allow to access from this origin only
        // origin:'http://localhost:5173' ,  //allow to access from this origin only
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    })
);

//middleware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port} ✅`))