const express = require('express')
const app = express();
const PORT = 5000;
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./database/dbConfig');

app.use(express.json());
app.use('/auth', userRoutes)

app.get('/', (req, res) => res.json({
    message: 'Welcome'
}))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))