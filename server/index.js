// Initialize the package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const postRoutes = require('./routes/myPost');
const userRoutes = require('./routes/user');
require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


// Default routes
app.get('/', (req,res) => {
    res.send('We are on home page');
});

// Mongoose connectivity
mongoose.connect(process.env.DB_BASE_URL, {useNewUrlParser: true,useUnifiedTopology: true},() => {
    console.log('connected to DB');
});

// Middleware
app.use(express.json());

// Routes Middleware
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

// Port assign
const port = process.env.PORT || 4949;

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
    });
}

// Listen the app with port
app.listen(port, () => (console.log(`server running on ${port}.`)));