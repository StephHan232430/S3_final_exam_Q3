const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Record = db.Record
const { authenticated } = require('../config/auth')

// 列出所有records
router.get('/', authenticated, (req, res) => {
  res.send('列出所有records')
})

// 新增一筆record
router.post('/new', authenticated, (req, res) => {
  res.send('新增一筆record')
})

// 編輯一筆record
router.put('/:id', authenticated, (req, res) => {
  res.send('編輯一筆record')
})

// 刪除一筆record
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('刪除一筆record')
})

module.exports = router