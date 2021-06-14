var User        = require('../models/user');
var middlewareObj = {};


middlewareObj.checkAdmin = function(req, res, next){
    if(req.isAuthenticated()){
        User.findById(req.user._id, function(err, currentUser){
            if(err){
                req.flash('error', 'Sorry!! You can not acess this page.');
                res.redirect('back');
            } else {
                if( currentUser.priority === 'admin' ){
                    return next();
                } else{
                    req.flash('error', 'Sorry!! You can not acess this page.');
                    res.redirect('back');
                }
            }
        });
    } else {
        req.flash('error', 'Please Login first!');
        res.redirect('back');
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'Please Login first!');
    res.redirect('/login');
};

middlewareObj.checkProfileOwner = function(req, res, next){
    if(req.isAuthenticated()){
        if( req.user._id.equals(req.params.id) ){
            return next();
        }
        else {
            req.flash('error', 'Please check it again!');
            res.redirect('/back');
        }
    } else {
        req.flash('error', 'Please Login first!');
        res.redirect('/login');
    }
};

module.exports = middlewareObj;