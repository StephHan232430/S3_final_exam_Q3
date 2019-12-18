const db = require('../models')
const User = db.User
const Record = db.Record
const userSeeds = require('../seeders/user.json').users
const recordSeeds = require('../seeders/record.json').items
const bcrypt = require('bcryptjs')

for (let uNum = 0; uNum < userSeeds.length; uNum++) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(userSeeds[uNum].password, salt, (err, hash) => {
      if (err) throw err
      userSeeds[uNum].password = hash

      User.create(userSeeds[uNum]).then(user => {
        for (let rNum = uNum * 8; rNum < (uNum + 1) * 8; rNum++) {
          Record.create({
            name: recordSeeds[rNum].name,
            merchant: recordSeeds[rNum].merchant,
            category: recordSeeds[rNum].category,
            amount: recordSeeds[rNum].amount,
            date: recordSeeds[rNum].date,
            UserId: user.id
          })
        }
      })
    })
  })
}

console.log('Seeded!')