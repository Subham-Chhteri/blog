const express = require('express');
const app=express();
const trackerRoutes = require('./routes/trackerRoutes');
const seedDB = require('./seed');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

app.get('/', (req, res) => {
    res.send('use /blog to access BLOG');
});





mongoose.connect('mongodb://localhost:27017/tracker-db')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
});

seedDB();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.use(trackerRoutes);

app.listen(8080, (req, res) => {
    console.log("Server Started At Port 8080 ");
});

