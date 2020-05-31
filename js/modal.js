const modalHeader = document.getElementById('modal-header')
const modalBody = document.getElementById('modal-body')

const showModal = (header, body) => {
  modalHeader.textContent = header
  modalBody.textContent = body
}