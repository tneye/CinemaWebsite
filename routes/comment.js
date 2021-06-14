var express     = require('express'),
    router      = express.Router({mergeParams: true}),
    middleware = require('../middleware'),
    passport    = require('passport')
    Movies      = require('../models/movies'),
    Comment     = require('../models/comment'),
    User        = require('../models/user');

router.post('/', middleware.isLoggedIn, function(req, res){
    Movies.findById(req.params.id, function(err, foundMovies){
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                    req.flash('success', 'Comment error!');
                } else {
                    // เอาข้อมูลมา
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.author.picture = req.user.picture;
                    comment.save();
                    foundMovies.comments.push(comment);
                    foundMovies.save();
                    req.flash('success', 'Comment success');
                    res.redirect('back');
                }
            });
        }
    });
});
router.put('/:id', function(req, res){
    Comment.findByIdAndUpdate(req.params.id, req.body.comment, function( err, updatedComment ){
        if(err) {
            req.flash('error', 'An error occurred.');
            console.log(err);
        } else {
            req.flash('success', 'Edit success.');
            res.redirect('back');
        }
    });
});
router.delete('/:id', function(req, res){
    Comment.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        } else {
            req.flash('success', 'Delete success!!');
            res.redirect('back');
        }
    })
});

module.exports = router;