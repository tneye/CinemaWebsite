var express = require('express'),
    router  = express.Router(),
    multer = require('multer'),
    path = require('path'),
    middleware = require('../middleware'),

    storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './public/images/cinema/uploads');
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        },
    }),
    imageFilter = function (req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
            return callback(new Error('Can put only JPG , jpeg , png , GIF image files!'), false);
        }
        callback(null, true);
    },
    upload = multer({
        storage: storage,
        fileFilter: imageFilter,
    }),

    Cinemas  = require('../models/cinema');
    User    = require('../models/user');

router.get('/', function(req,res){
    Cinemas.find({}, function(err, ShowCinemas){
        if(err){
            console.log(err);
        } else {
            res.render('./cinema/cinema.ejs', {Cinemas: ShowCinemas});
        }
    });
});

//  New
router.get('/new', middleware.checkAdmin, function(req,res){
    res.render('./cinema/new.ejs');
});

router.post('/new', upload.fields([{ name: 'image' }, { name: 'logo' } ]), function(req, res){
    req.body.cinema.image = '/images/cinema/uploads/' + req.files['image'][0].filename;
    req.body.cinema.logo = '/images/cinema/uploads/' + req.files['logo'][0].filename;
    Cinemas.create(req.body.cinema, function(err, newCinemas){
        if(err){
            console.log(err);
        } else {
            req.flash('success', 'You are upload success!');
            res.redirect('/cinemas');
        }
    });
});
//  Search cinema
router.post('/search', function(req,res){
    var name = req.body.search;
    res.redirect('/cinemas/search/' + name + '#cinema');
});

router.get('/search/:name', function(req,res){
    Cinemas.find({name: new RegExp(req.params.name, 'i')}, function(err, foundCinemasname){
        if(err){
            console.log(err);
        } else {
            res.render('./cinema/cinema.ejs', {Cinemas: foundCinemasname, sort: req.params.name});
        }
    });
});


//  Edit
router.get('/:id/edit', middleware.checkAdmin,  function(req, res){
    Cinemas.findById(req.params.id, function( err, foundCinemas ){
        if(err) {
            console.log(err);
        } else {
            res.render('./cinema/edit.ejs', {Cinemas: foundCinemas})
        }
    });
});
//change data
router.put('/:id', upload.fields([{ name: 'image' }, { name: 'logo' }]), function(req, res){
    if ( req.files['image'] ){
        req.body.cinema.image = '/images/cinema/uploads/' + req.files['image'][0].filename;
    }
    if ( req.files['logo'] ){
        req.body.cinema.logo = '/images/cinema/uploads/' + req.files['logo'][0].filename;
    }
    Cinemas.findByIdAndUpdate(req.params.id, req.body.cinema, function( err, updatedCinemas ){
        if(err) {
            console.log(err);
            res.redirect('/cinemas/')
        } else {
            req.flash('success', 'Edit success!');
            res.redirect('/cinemas/' + req.params.id);
        }
    });
});


//  Delete
router.delete('/:id', function(req, res){
    Cinemas.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        } else {
            req.flash('success', 'Delete success');
            res.redirect('/cinemas');
        }
    })
});


//  info
//exec = execute ใช้ฟังชั่นต่อ
router.get('/:id', function(req,res){
    Cinemas.findById(req.params.id).exec(function(err, foundCinemas){
        if(err){
            console.log(err);
        } else {
            Movies.find({type: "nowshow"}, function(err, allMovies){
                if(err){
                    console.log(err);
                } else {
                    res.render('./cinema/info.ejs', {Movies: allMovies, Cinemas: foundCinemas});
                }
            });
        }
    });
});

module.exports = router;