const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Record = db.Record
const { authenticated } = require('../config/auth')

// 列出所有records
router.get('/', authenticated, (req, res) => {
  res.redirect('/records')
})

// 新增一筆record
router.post('/new', authenticated, (req, res) => {
  Record.create({
    name: req.body.name,
    merchant: req.body.merchant,
    category: req.body.category,
    amount: req.body.amount,
    date: req.body.date,
    UserId: req.user.id
  })
    .then(record => res.redirect('/'))
    .catch(error => res.status(422).json(error))
})

// 編輯一筆record
router.put('/:id', authenticated, (req, res) => {
  Record.findOne({
    where: {
      id: req.params.id,
      UserId: req.user.id
    }
  })
    .then(record => {
      record.name = req.body.name
      record.merchant = req.body.merchamt
      record.date = req.body.date
      record.category = req.body.category
      record.amount = req.body.amount
      return record.save()
    })
    .then(record => res.redirect('/'))
    .catch(error => res.status(422).json(error))
})

// 刪除一筆record
router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) throw new Error('user not found')

      return Record.destroy({
        where: {
          UserId: req.user.id,
          id: req.params.id
        }
      })
    })
    .then(record => res.redirect('/'))
    .catch(error => res.status(422).json(error))
})

module.exports = router