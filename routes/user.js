const express = require('express')
const router = express.Router()
const passport = require('passport')
const db = require('../models')
const User = db.User
const bcrypt = require('bcryptjs')

// 認證系統路由
// 註冊頁面
router.get('/register', (req, res) => {
  res.render('register')
})

// 註冊檢查
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  let errors = []

  if (!name || !email || !password || !password2) {
    errors.push('註冊失敗...所有欄位皆為必填')
  }
  if (password !== password2) {
    errors.push('註冊失敗...password與confirm password不符')
  }
  if (errors.length > 0) {
    res.render('register', { errors, name, email, password, password2 })
  } else {
    User.findOne({ where: { email: email } }).then(user => {
      if (user) {
        errors.push('註冊失敗...此email已被註冊')
        res.render('register', { errors, name, email, password, password2 })
      } else {
        const newUser = new User({ name, email, password })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash

            newUser
              .save()
              .then(user => {
                res.redirect('/')
              })
              .catch(err => console.log(err))
          })
        })
      }
    })
  }
})

// 登入頁面
router.get('/login', (req, res) => {
  const errors = req.flash().error
  res.render('login', { errors })
})

// 登入檢查
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next)
})

// 登出
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已成功登出')
  res.redirect('/users/login')
})

module.exports = router