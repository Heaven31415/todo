export default class DeadlineCheckbox {
  constructor() {
    this.checkbox = document.getElementById('deadline-checkbox');
    this.dayInput = document.getElementById('day-input');
    this.monthInput = document.getElementById('month-input');
    this.yearInput = document.getElementById('year-input');

    this.checkbox.addEventListener('change', (e) => this.onChange(e));
  }

  onChange(e) {
    const disabled = !e.target.checked;

    this.dayInput.disabled = disabled;
    this.monthInput.disabled = disabled;
    this.yearInput.disabled = disabled;
  }
}
