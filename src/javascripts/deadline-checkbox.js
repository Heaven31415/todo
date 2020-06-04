export default class DeadlineCheckbox {
  constructor() {
    this.checkbox = document.getElementById('deadline-checkbox');
    this.dayInput = document.getElementById('day-input');
    this.monthInput = document.getElementById('month-input');
    this.yearInput = document.getElementById('year-input');

    this.checkbox.addEventListener('change', (e) => this.onChange(e));
  }

  set checked(value) {
    this.checkbox.checked = value;

    this.dayInput.disabled = !value;
    this.monthInput.disabled = !value;
    this.yearInput.disabled = !value;

    if (!value) {
      this.dayInput.value = '';
      this.monthInput.value = '';
      this.yearInput.value = '';
    }
  }

  get checked() {
    return this.checkbox.checked;
  }

  onChange(e) {
    this.checked = e.target.checked;
  }
}
