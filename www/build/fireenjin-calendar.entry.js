import { r as registerInstance, f as createEvent, h } from './index-7ecca5a2.js';

const calendarCss = "fireenjin-calendar{display:block}fireenjin-calendar .calendar-controls{font-weight:var(--fireenjin-calendar-controls-font-weight, 800);font-family:var(--fireenjin-calendar-controls-font-weight, inherit);text-align:var(--fireenjin-calendar-controls-text-align, center)}fireenjin-calendar .calendar-controls ion-col{cursor:pointer}fireenjin-calendar .cell{font-size:var(--fireenjin-calendar-cell-font-size, 12pt);font-weight:var(--fireenjin-calendar-cell-font-weight, bolder);font-family:var(--fireenjin-calendar-cell-font-family, inherit);color:var(--fireenjin-calendar-cell-color, inherit);padding:var(--fireenjin-calendar-cell-padding, 15px 0);background-color:var(--fireenjin-calendar-cell-background, transparent);background:var(--fireenjin-calendar-cell-background, transparent);border:var(--fireenjin-calendar-cell-border, 1px solid #000);cursor:var(--fireenjin-calendar-cell-cursor, pointer) !important;text-align:var(--fireenjin-calendar-cell-text-align, center);position:relative}fireenjin-calendar .cell.selected{background:var(--fireenjin-calendar-selected-background, #000);font-weight:var(--fireenjin-calendar-selected-font-weight, 800);color:var(--fireenjin-calendar-selected-color, #fff) !important;opacity:1 !important}fireenjin-calendar .cell.faded{opacity:0.4}fireenjin-calendar .cell:hover{box-shadow:var(--fireenjin-calendar-hover-box-shadow, 0 0 0 3px inset #000);color:var(\n    --fireenjin-calendar-hover-color,\n    var(--fireenjin-calendar-selected-background, #000)\n  );font-weight:var(--fireenjin-calendar-hover-font-weight, 800);opacity:1 !important}fireenjin-calendar .cell.unavailable{box-shadow:none !important;font-weight:var(--fireenjin-calendar-cell-font-weight, normal);opacity:0.4 !important;cursor:not-allowed !important}fireenjin-calendar .calendar-grid,fireenjin-calendar .month-grid,fireenjin-calendar .year-grid{display:block;opacity:0;height:0;transition:all ease-out 0.4s;pointer-events:none;overflow:hidden}fireenjin-calendar .calendar-grid.viewing,fireenjin-calendar .month-grid.viewing,fireenjin-calendar .year-grid.viewing{opacity:1;height:auto;pointer-events:initial}fireenjin-calendar .calendar-grid{display:grid;grid-template-columns:repeat(7, 1fr);grid-auto-rows:1fr;grid-gap:var(--fireenjin-calendar-grid-gap, 3px);text-align:center}fireenjin-calendar .calendar-grid>.head-cell{font-size:var(--fireenjin-calendar-head-font-size, 13pt);font-weight:var(--fireenjin-calendar-head-font-weight, 300);margin:var(--fireenjin-calendar-head-margin, auto 0);padding:var(--fireenjin-calendar-head-padding, 0 0 5px 0)}fireenjin-calendar .range .start-date{border-radius:var(--fireenjin-calendar-selected-range-notch, 14px) 0 0 0}fireenjin-calendar .range .end-date{border-radius:0 0 var(--fireenjin-calendar-selected-range-notch, 14px) 0}";

let Calendar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinDateSelected = createEvent(this, "fireenjinDateSelected", 7);
    this.fireenjinCalendarNavigate = createEvent(this, "fireenjinCalendarNavigate", 7);
    /**
     * The title to use when showing the year selection view
     */
    this.yearsTitle = `Select a Year`;
    /**
     * The current view being used
     */
    this.currentView = "calendar";
  }
  /**
   * Switch the view of the calendar
   * @param event The click event from the element being used
   * @param view The view to switch to
   */
  async switchView(event, view) {
    this.fireenjinCalendarNavigate.emit({
      event,
      currentView: view,
      back: false,
      year: this.year,
      month: this.month,
      startDate: this.startDate,
      endDate: this.endDate
    });
    return (this.currentView = view);
  }
  /**
   * Set the current date of the calendar
   * @param dateString The date in YYYY-MM-DD format to set the calendar to
   */
  async setDate(dateString) {
    if ((this.range && dateString > this.startDate && !this.endDate) ||
      (this.range && this.endDate && dateString > this.endDate)) {
      this.endDate = dateString;
    }
    else {
      this.startDate = dateString;
      if (this.endDate) {
        this.endDate = null;
      }
    }
  }
  getDate() {
    const date = new Date();
    if (this.year != null) {
      date.setFullYear(this.year);
    }
    if (this.month != null) {
      date.setMonth(this.month);
    }
    date.setDate(1);
    this.year = date.getFullYear();
    this.month = date.getMonth();
    return date;
  }
  getTitle() {
    const date = this.getDate();
    return this.currentView === "years"
      ? this.yearsTitle
      : `${this.currentView === "calendar"
        ? date.toLocaleString(this.locales, {
          month: "long"
        })
        : ""} ${date.getFullYear()}`;
  }
  navigate(event, back = false) {
    const date = this.getDate();
    if (this.currentView === "calendar") {
      this.month = date.getMonth() - (back ? 1 : -1);
    }
    else if (this.currentView === "months") {
      this.year = date.getFullYear() - (back ? 1 : -1);
    }
    else if (this.currentView === "years") {
      this.year = date.getFullYear() - (back ? 9 : -9);
    }
    this.fireenjinCalendarNavigate.emit({
      event,
      back,
      currentView: this.currentView,
      year: this.year,
      month: this.month,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }
  pad(num, size) {
    return ("0" + num).substr(("0" + num).length - size);
  }
  buildCalendar() {
    const date = this.getDate();
    const originalDate = this.getDate();
    if (date.getDay() > 0) {
      date.setDate(date.getDate() - date.getDay());
    }
    const days = [];
    let xpos = 0;
    let ypos = 2;
    for (let index = 1; index <= 35; index++) {
      const x = date.getDay();
      if (x < xpos) {
        ypos++;
      }
      xpos = x;
      days.push({
        number: date.getDate(),
        x: xpos + 1,
        y: ypos,
        inMonth: date.getMonth() === originalDate.getMonth(),
        index,
        dateString: `${date.getFullYear()}-${this.pad(date.getMonth() + 1, 2)}-${this.pad(date.getDate(), 2)}`
      });
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  async onSelected(event, dateString) {
    event.preventDefault();
    event.stopPropagation();
    await this.setDate(dateString);
    const [year, month, day] = dateString.split("-");
    this.fireenjinDateSelected.emit({
      event,
      dateString,
      day,
      month,
      year,
      startDate: this.startDate,
      endDate: this.endDate
    });
    return false;
  }
  getMonths() {
    let months = [];
    for (var i = 0; i < 12; i++) {
      months.push(new Date(0, i).toLocaleString(this.locales, { month: "short" }));
    }
    return months;
  }
  getYears() {
    let years = [];
    const selectedYear = this.year ? this.year : new Date().getFullYear();
    const modifiedYear = selectedYear - 4;
    for (var i = 0; i < 9; i++) {
      years.push(modifiedYear + i);
    }
    return years;
  }
  selectMonth(event, index) {
    event.preventDefault();
    this.month = index;
    this.switchView(event, "calendar");
  }
  selectYear(event, year) {
    event.preventDefault();
    this.year = year;
    this.switchView(event, "months");
  }
  renderLegend() {
    const date = new Date(Date.UTC(2015, 0, 1));
    const formater = new Intl.DateTimeFormat(this.locales, {
      weekday: "short"
    });
    const weekDays = [];
    for (let day = 1; day <= 7; day++) {
      date.setDate(day);
      weekDays.push(h("div", { class: "head-cell" }, formater.format(date)));
    }
    return weekDays;
  }
  render() {
    return (h("div", { class: "calendar-wrapper" }, h("ion-grid", { class: "calendar-controls" }, h("ion-row", null, h("ion-col", { size: "1", onClick: event => this.navigate(event, true) }, h("ion-icon", { name: "arrow-back" })), h("ion-col", { class: "calendar-title", size: "10", onClick: event => this.switchView(event, this.currentView === "calendar" ? "months" : "years") }, this.getTitle()), h("ion-col", { size: "1", onClick: event => this.navigate(event) }, h("ion-icon", { name: "arrow-forward" })))), h("div", { class: {
        "calendar-grid": true,
        viewing: this.currentView === "calendar",
        range: this.range
      } }, [
      ...this.renderLegend(),
      ...this.buildCalendar().map(day => {
        const unavailable = (this.available &&
          this.available.indexOf(day.dateString) === -1) ||
          (this.max && day.dateString > this.max) ||
          (this.min && day.dateString < this.min) ||
          false;
        return (h("button", { class: {
            unavailable,
            "start-date": this.startDate === day.dateString,
            "end-date": this.endDate === day.dateString,
            selected: this.range && this.endDate
              ? this.startDate <= day.dateString &&
                this.endDate >= day.dateString
              : this.startDate && this.startDate === day.dateString,
            cell: true,
            faded: !day.inMonth
          }, disabled: unavailable, onClick: event => this.onSelected(event, day.dateString), style: {
            gridColumn: `${day.x}`,
            gridRow: `${day.y}`
          } }, day.number));
      })
    ]), h("div", { class: { "month-grid": true, viewing: this.currentView === "months" } }, h("ion-grid", null, h("ion-row", null, this.getMonths().map((month, index) => (h("ion-col", { size: "4", onClick: event => this.selectMonth(event, index) }, h("div", { class: { cell: true, selected: index === this.month } }, month))))))), h("div", { class: { "year-grid": true, viewing: this.currentView === "years" } }, h("ion-grid", null, h("ion-row", null, this.getYears().map(year => (h("ion-col", { size: "4", onClick: event => this.selectYear(event, year) }, h("div", { class: { cell: true, selected: year === this.year } }, year)))))))));
  }
};
Calendar.style = calendarCss;

export { Calendar as fireenjin_calendar };
