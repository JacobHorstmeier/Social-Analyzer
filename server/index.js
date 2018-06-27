require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./controller')
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
// var fs = require('fs');

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

const app = express();
// app.use(express.static(__dirname + './../build'))
// massive(CONNECTION_STRING).then(db => {
//     app.set("db", db) would be used to reference our build folder once we do npm build start

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.use(bodyParser.json())

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done)=> {
    const db = app.get('db');
    let { id, displayName, picture } = profile;
    db.find_user([id]).then(user => {
        if(user[0]) {
            done(null, user[0].id)
        } else {
            db.create_user([displayName, picture, id]).then( (createdUser)=> {
                done(null, createdUser[0].id)
            })
        }
    });
}));


passport.serializeUser((primaryKeyID, done) => {
    done(null, primaryKeyID)});

passport.deserializeUser((primaryKeyID, done) => {
    app.get("db").find_session_user([primaryKeyID]).then(user => {
        done(null, user[0])})});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/home'}))

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000')})

app.get('/auth/user', (req, res) => {
    if(req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Niced Try ')
    }
})

// profile get request
app.post('/api/getProfile', ctrl.profileGetter)

// User Related Data
app.get('/api/getSavedProfiles', ctrl.savedProfileGetter)
app.post('/api/saveProfile', ctrl.saveProfile)
app.delete('/api/deleteProfile/:id', ctrl.deleteProfile)






app.listen(SERVER_PORT, () => {
    console.log(`Making Minutes Feel Like Full Days On: `, SERVER_PORT)
})
