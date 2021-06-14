var express     = require('express'),
    router      = express.Router(),
    passport    = require('passport'),
    middleware = require('../middleware'),
    Movies      = require('../models/movies'),
    User        = require('../models/user');

router.get('/', function(req, res){
    Movies.find({type: "nowshow"}, function(err, allMovies){
        if(err){
            console.log(err);
        } else {
            //-1 เรียงน้อยไปมาก 1 มากไปน้อย
            Movies.find({type: "nowshow"}).sort({score: -1}).limit(4).exec(function(err, sortMovies){
                if(err){
                    console.log(err);
                } else {
                    res.render('./index/index.ejs', {Movies: allMovies, Sort: sortMovies});
                }
            });
        }
    });
});

//  Register
router.get('/register', function(req, res){
    res.render('./index/register.ejs');
});

router.post('/register', function(req, res){
   //crate obj
    var newUser = new User({username: req.body.username, firstname: req.body.firstname,  lastname: req.body.lastname});
    //cant see pw in db
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash('error', err.message);
            return res.render('./index/register');
        } else { //ตัวที่ไม่รู้พาส
            passport.authenticate('local')(req, res, function(){
                req.flash('success', 'You have been registered!  ' + user.username);
                res.redirect('/');
            });
        }
    });
});

//  Login
router.get('/login', function(req, res){
    res.render('./index/login.ejs');
});
// check pass
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: true,
        failureFlash: true,
        successFlash: 'Log in success!',
        failureFlash: 'Invalid username or password,double check it please',
    }), function(res, req){
});

router.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'logged out success!');
    res.redirect('/');
});

module.exports = router;