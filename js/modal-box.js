class ModalBox {
  constructor() {
    this.background = document.getElementById('modal-box-background')
    this.header = document.getElementById('modal-box-header')
    this.body = document.getElementById('modal-box-body')

    document.getElementById('modal-box-button').addEventListener('click', () => {
      this.hide()
    })
  }

  show(header, body) {
    this.background.style.display = 'flex'
    this.header.textContent = header
    this.body.textContent = body
  }

  hide() {
    this.background.style.display = 'none'
  }
}