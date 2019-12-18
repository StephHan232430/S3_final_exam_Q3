const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record
const { Op } = require('sequelize')
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  const month = req.query.month
  const category = req.query.category
  let selectHousehold = false
  let selectTransportation = false
  let selectEntertainment = false
  let selectDiet = false
  let selectOthers = false
  let selectAllCategories = false
  let filter = { where: { UserId: req.user.id }, order: [['date', 'DESC']] }

  switch (category) {
    case 'household':
      selectHousehold = true
      break
    case 'transportation':
      selectTransportation = true
      break
    case 'entertainment':
      selectEntertainment = true
      break
    case 'diet':
      selectDiet = true
      break
    case 'others':
      selectOthers = true
      break
    case '':
      selectAllCategories = true
      break
    default:
      selectHousehold = false
      selectTransportation = false
      selectEntertainment = false
      selectDiet = false
      selectOthers = false
      selectAllCategories = false
  }

  if (category !== '') {
    let monthStart = new Date(`${month}-01`)
    let extendedMonthEnd = new Date(`${month}-31`)
    let fullMonthEnd = new Date(`${month}-30`)
    let extendedLeapMonthEnd = new Date(`${month}-29`)
    let leapMonthEnd = new Date(`${month}-28`)

    if (monthStart.toISOString().substring(0, 7) !== extendedLeapMonthEnd.toISOString().substring(0, 7)) {
      filter.where.date = {
        [Op.between]: [monthStart, leapMonthEnd]
      }
    } else if (monthStart.toISOString().substring(0, 7) !== fullMonthEnd.toISOString().substring(0, 7)) {
      filter.where.date = {
        [Op.between]: [monthStart, extendedLeapMonthEnd]
      }
    } else if (monthStart.toISOString().substring(0, 7) !== extendedMonthEnd.toISOString().substring(0, 7)) {
      filter.where.date = {
        [Op.between]: [monthStart, fullMonthEnd]
      }
    } else {
      filter.where.date = {
        [Op.between]: [monthStart, extendedMonthEnd]
      }
    }
    filter.where.category = category
  }

  if (month !== '') {
    let monthStart = new Date(`${month}-01`)
    let extendedMonthEnd = new Date(`${month}-31`)
    let fullMonthEnd = new Date(`${month}-30`)
    let extendedLeapMonthEnd = new Date(`${month}-29`)
    let leapMonthEnd = new Date(`${month}-28`)

    if (monthStart.toISOString().substring(0, 7) !== extendedLeapMonthEnd.toISOString().substring(0, 7)) {
      filter.where.date = {
        [Op.between]: [monthStart, leapMonthEnd]
      }
    } else if (monthStart.toISOString().substring(0, 7) !== fullMonthEnd.toISOString().substring(0, 7)) {
      filter.where.date = {
        [Op.between]: [monthStart, extendedLeapMonthEnd]
      }
    } else if (monthStart.toISOString().substring(0, 7) !== extendedMonthEnd.toISOString().substring(0, 7)) {
      filter.where.date = {
        [Op.between]: [monthStart, fullMonthEnd]
      }
    } else {
      filter.where.date = {
        [Op.between]: [monthStart, extendedMonthEnd]
      }
    }

    if (req.session.category) {
      filter.where.category = req.session.category
    }
  }


  Record.findAll(filter)
    .then(records => {
      const isDataEmpty = records.length === 0 ? true : false
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
          case 'others':
            record.others = true
            break
          default:
            record.household = false
            record.transportation = false
            record.entertainment = false
            record.diet = false
            record.others = false
        }
      }

      return res.render('index', { records, category, selectHousehold, selectTransportation, selectEntertainment, selectDiet, selectOthers, selectAllCategories, totalAmount, isDataEmpty, month })
    })
    .catch(error => res.status(422).json(error))
})

module.exports = router