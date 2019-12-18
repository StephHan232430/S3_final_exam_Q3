(function () {
  const spendingDates = document.querySelectorAll('.spending-date')
  const today = new Date().toISOString().substring(0, 10)

  for (let spendingDate of spendingDates) {
    spendingDate.setAttribute('max', today)
  }
})()