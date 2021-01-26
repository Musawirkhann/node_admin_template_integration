const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const bodParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes.routes);
app.use(authRoutes.routes);


app.listen(3000, () => console.log('App is listening on url http://localhost:3000'));