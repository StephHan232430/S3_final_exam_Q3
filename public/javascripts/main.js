(function () {
  const spendingDate = document.querySelector('#spending-date')
  const today = new Date().toISOString().substring(0, 10)

  spendingDate.setAttribute('max', today)

})()