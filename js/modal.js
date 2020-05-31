const modalBackground = document.getElementById('modal-background')
const modalHeader = document.getElementById('modal-header')
const modalBody = document.getElementById('modal-body')
const modalButton = document.getElementById('modal-button')

modalButton.addEventListener('click', () => modalBackground.style.display = 'none')

const showModal = (header, body) => {
  modalHeader.textContent = header
  modalBody.textContent = body
  modalBackground.style.display = 'flex'
}