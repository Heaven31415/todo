export default class ModalBox {
  constructor() {
    this.background = document.getElementById('modal-box-background');
    this.header = document.getElementById('modal-box-header');
    this.body = document.getElementById('modal-box-body');
    this.hidden = true;

    document.getElementById('modal-box-button').addEventListener('click', () => {
      this.hide();
    });
  }

  show(header, body) {
    if (this.hidden) {
      this.header.textContent = header;
      this.body.textContent = body;

      this.background.classList.remove('fade-out');
      this.background.classList.add('fade-in');
      this.hidden = false;
    }
  }

  hide() {
    if (!this.hidden) {
      this.background.classList.remove('fade-in');
      this.background.classList.add('fade-out');
      this.hidden = true;
    }
  }
}
