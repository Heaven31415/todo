'use strict'

class Datetime {
  constructor() {
    this.datetime = document.getElementById('datetime')
    this.setTextContent()
    setInterval(this.setTextContent, 1000)
  }

  setTextContent() {
    this.datetime.textContent = moment().format('D MMMM YYYY HH:mm:ss')
  }
}