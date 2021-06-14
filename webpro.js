const { db } = require('./models/user');

const   express         = require('express'),
        webpro           = express(),
        bodyParser      = require('body-parser'),
        mongoose        = require('mongoose'),
        flash           = require('connect-flash'),
        methodOverride  = require('method-override'),
        passport        = require('passport'),
        LocalStrategy   = require('passport-local'),
        User            = require('./models/user'),
        seedDB          = require('./seeds');

var indexRoutes = require('./routes/index'),
    moviesRoutes = require('./routes/movies'),
    cinemasRoutes = require('./routes/cinema');
    commentRoutes = require('./routes/comment');
    reserveRoutes = require('./routes/reserve');
    sessionRoutes = require('./routes/session');
    userRoutes = require('./routes/user');

mongoose.connect('mongodb://localhost/Movies');
webpro .use(bodyParser.urlencoded({extended: true}));
webpro .use(express.static('public'));
webpro .use(methodOverride('_method'));
webpro .use(flash());
webpro .set('view engine', 'ejs');
// seedDB();

//Settings Passport
webpro .use(require('express-session')({
    secret: 'secret is always secret.',
    resave: false,
    saveUninitialized: false,
}));
webpro .use(passport.initialize());
webpro .use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

webpro .use(function(req, res, next){
    res.locals.currentUser  = req.user;
    res.locals.error        = req.flash('error');
    res.locals.success      = req.flash('success');
    next();
});

//  Routes
webpro .use('/', indexRoutes);
webpro .use('/movies', moviesRoutes);
webpro .use('/cinemas', cinemasRoutes);
webpro .use('/user', userRoutes);
webpro .use('/reserve', reserveRoutes);
webpro .use('/session', sessionRoutes);
webpro .use('/movies/:id/comments', commentRoutes);

webpro .listen(3000, function(){
    console.log('Emprissed is coming.');
});