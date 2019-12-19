(function () {
  const spendingDates = document.querySelectorAll('.spending-date')

  function getToday() {
    let date = new Date()
    return today = date.getFullYear() + '-' + (Number(date.getMonth()) + 1) + '-' + date.getDate()
  }

  for (let spendingDate of spendingDates) {
    spendingDate.setAttribute('onload', 'getToday()')
    spendingDate.setAttribute('max', getToday())
  }
})()