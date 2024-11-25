// табы в товаре

const buttons_divan_characteristic = document.querySelectorAll('.divan-characteristic__button')
const divan_tables = document.querySelectorAll('.divan-table')
buttons_divan_characteristic[0].addEventListener('click', () => {
  divan_tables[0].classList.contains('show') ? divan_tables[0].classList.remove('show') : ""
  divan_tables[1].classList.contains('show') ? divan_tables[1].classList.remove('show') : ""
  divan_tables[2].classList.contains('show') ? divan_tables[2].classList.remove('show') : ""
  divan_tables[3].classList.contains('show') ? divan_tables[3].classList.remove('show') : ""

  divan_tables[0].classList.add('show')
})

buttons_divan_characteristic[1].addEventListener('click', () => {
  divan_tables[0].classList.contains('show') ? divan_tables[0].classList.remove('show') : ""
  divan_tables[1].classList.contains('show') ? divan_tables[1].classList.remove('show') : ""
  divan_tables[2].classList.contains('show') ? divan_tables[2].classList.remove('show') : ""
  divan_tables[3].classList.contains('show') ? divan_tables[3].classList.remove('show') : ""

  divan_tables[1].classList.add('show')
})

buttons_divan_characteristic[2].addEventListener('click', () => {
  divan_tables[0].classList.contains('show') ? divan_tables[0].classList.remove('show') : ""
  divan_tables[1].classList.contains('show') ? divan_tables[1].classList.remove('show') : ""
  divan_tables[2].classList.contains('show') ? divan_tables[2].classList.remove('show') : ""
  divan_tables[3].classList.contains('show') ? divan_tables[3].classList.remove('show') : ""

  divan_tables[2].classList.add('show')
})

buttons_divan_characteristic[3].addEventListener('click', () => {
  divan_tables[0].classList.contains('show') ? divan_tables[0].classList.remove('show') : ""
  divan_tables[1].classList.contains('show') ? divan_tables[1].classList.remove('show') : ""
  divan_tables[2].classList.contains('show') ? divan_tables[2].classList.remove('show') : ""
  divan_tables[3].classList.contains('show') ? divan_tables[3].classList.remove('show') : ""

  divan_tables[3].classList.add('show')
})

// модалки в товаре

const button_divan_order = document.querySelector('.page-divan-order__button')
const button_divan_table = document.querySelector('.divan-table__color-descrition')
const close_modal = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')

button_divan_order.addEventListener('click', () => {
  document.querySelector('body').style.overflow = 'hidden'
  modal.style.display = "flex"
})


close_modal.addEventListener('click', () => {
  document.querySelector('body').style.overflow = ''
  modal.style.display = "none"
})

button_divan_table.addEventListener('click', () => {
  document.querySelector('body').style.overflow = 'hidden'
  modal.style.display = "flex"
})
