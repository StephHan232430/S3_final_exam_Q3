const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const port = 3000

const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const db = require('./models')
const Record = db.Record
const User = db.User

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use(flash())

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.get('/', (req, res) => {
  res.send('homepage')
})

// 認證系統路由
// 註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})

// 註冊檢查
app.post('/users/register', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => res.redirect('/'))
})

// 登入頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})

// 登入檢查
app.post('/users/login', (req, res) => {
  res.send('login')
})

// 登出
app.get('/users/logout', (req, res) => {
  res.send('logout')
})

app.listen(port, () => {
  console.log(`App is running on ${port}`)
})