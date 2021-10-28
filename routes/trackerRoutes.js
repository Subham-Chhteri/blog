const express = require('express');
const router = express.Router();
const Tracker = require('../models/tracker');

router.get('/blog', async(req, res) => {
    
    const tracker = await Tracker.find({});

    res.render('blog/index',{tracker});
});

// Get the new from to create new product
router.get('/blog/new', (req, res) => {
    res.render('blog/new')
});

// create a new product with the given payload
router.post('/blog', async (req, res) => {
    
    const newTrack = {
        ...req.body
    }

    await Tracker.create(newTrack);

    res.redirect('/blog');
});

router.get('/blog/:id', async(req,res)=>{
    const {id} = req.params;
    const tracks = await Tracker.findById(id);
    res.render('blog/show',{tracks});
});

// Edit the form 
router.get('/blog/:id/update', async(req,res)=>{
    const {id} = req.params;
    const tracks =  await Tracker.findById(id);
    res.render('blog/update',{tracks});
});

//Get the form pre-filled
router.patch('/blog/:id', async (req, res) => {

    const updatedTracker = req.body;
    const { id } = req.params;
    await Tracker.findByIdAndUpdate(id, updatedTracker);
    res.redirect(`/blog/${id}`);
});

//Delete the components from the table
router.delete('/blog/:id',async(req,res)=>{
    const {id} = req.params;
    await Tracker.findOneAndDelete(id);
    res.redirect('/blog');
});


module.exports = router;