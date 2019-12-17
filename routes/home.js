const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Record = db.Record
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) throw new Error('user not found')

      return Record.findAll({ where: { UserId: req.user.id }, order: [['date', 'DESC']] })
    })
    .then(records => {
      let totalAmount = 0
      for (let record of records) {
        totalAmount += record.amount
        switch (record.category) {
          case 'household':
            record.household = true
            break
          case 'transportation':
            record.transportation = true
            break
          case 'entertainment':
            record.entertainment = true
            break
          case 'diet':
            record.diet = true
            break
          default:
            record.others = true
        }
      }
      return res.render('index', { records, totalAmount })
    })
    .catch(error => res.status(422).json(error))
})

module.exports = router