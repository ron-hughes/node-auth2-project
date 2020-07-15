const express = require('express')
const session = require('express-session');
const app = express();
const PORT = 5000;
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./database/dbConfig');
const KnexSessionStore = require('connect-session-knex')(session);


app.use(session({
    name: 'dbdb',
    secret: 'try not to get caught or Ill come for you',
    cookie:{
        maxAge:  15000,
        httpOnly: true, //Make  it so that 
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: dbConfig,
        createtable: true
    })
}))
app.use(express.json());
app.use('/auth', userRoutes)

app.get('/', (req, res) => res.json({
    message: 'Welcome'
}))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))