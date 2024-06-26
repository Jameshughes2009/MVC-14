// // Adding Dependencies info 
// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require("express-handlebars");
// const hbs = exphbs.create({helpers: require("./utils/helpers")});
// const helpers = require('./utils/helpers');
// const routes = require('./controller')
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store)

// const app = express();
// const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize,
//     })
// };

// app.use(session(sess));

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// app.use(express.static('public'));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(
//     session({
//         secret: process.env.SECRET,
//         store: new SequelizeStore({ db: sequelize }),
//         resave: false,
//         saveUninitialized: false,
//     })
// );

// app.use(routes);
// sequelize.sync({force:false}).then(() =>{
//     app.listen(PORT, () => console.log(`Listening on ${PORT}`));
// });

// All connections to the PORT 3001 and all requires
const path = require('path');
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./controller');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 600000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// test // test
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening v2'));
});