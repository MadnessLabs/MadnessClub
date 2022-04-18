import{r as e,c as n,h as i}from"./p-21a72a99.js";const r=class{constructor(i){e(this,i),this.fireenjinDateSelected=n(this,"fireenjinDateSelected",7),this.fireenjinCalendarNavigate=n(this,"fireenjinCalendarNavigate",7),this.yearsTitle="Select a Year",this.currentView="calendar"}async switchView(e,n){return this.fireenjinCalendarNavigate.emit({event:e,currentView:n,back:!1,year:this.year,month:this.month,startDate:this.startDate,endDate:this.endDate}),this.currentView=n}async setDate(e){this.range&&e>this.startDate&&!this.endDate||this.range&&this.endDate&&e>this.endDate?this.endDate=e:(this.startDate=e,this.endDate&&(this.endDate=null))}getDate(){const e=new Date;return null!=this.year&&e.setFullYear(this.year),null!=this.month&&e.setMonth(this.month),e.setDate(1),this.year=e.getFullYear(),this.month=e.getMonth(),e}getTitle(){const e=this.getDate();return"years"===this.currentView?this.yearsTitle:`${"calendar"===this.currentView?e.toLocaleString(this.locales,{month:"long"}):""} ${e.getFullYear()}`}navigate(e,n=!1){const i=this.getDate();"calendar"===this.currentView?this.month=i.getMonth()-(n?1:-1):"months"===this.currentView?this.year=i.getFullYear()-(n?1:-1):"years"===this.currentView&&(this.year=i.getFullYear()-(n?9:-9)),this.fireenjinCalendarNavigate.emit({event:e,back:n,currentView:this.currentView,year:this.year,month:this.month,startDate:this.startDate,endDate:this.endDate})}pad(e,n){return("0"+e).substr(("0"+e).length-n)}buildCalendar(){const e=this.getDate(),n=this.getDate();e.getDay()>0&&e.setDate(e.getDate()-e.getDay());const i=[];let r=0,a=2;for(let t=1;t<=35;t++){const l=e.getDay();l<r&&a++,r=l,i.push({number:e.getDate(),x:r+1,y:a,inMonth:e.getMonth()===n.getMonth(),index:t,dateString:`${e.getFullYear()}-${this.pad(e.getMonth()+1,2)}-${this.pad(e.getDate(),2)}`}),e.setDate(e.getDate()+1)}return i}async onSelected(e,n){e.preventDefault(),e.stopPropagation(),await this.setDate(n);const[i,r,a]=n.split("-");return this.fireenjinDateSelected.emit({event:e,dateString:n,day:a,month:r,year:i,startDate:this.startDate,endDate:this.endDate}),!1}getMonths(){let e=[];for(var n=0;n<12;n++)e.push(new Date(0,n).toLocaleString(this.locales,{month:"short"}));return e}getYears(){let e=[];const n=(this.year?this.year:(new Date).getFullYear())-4;for(var i=0;i<9;i++)e.push(n+i);return e}selectMonth(e,n){e.preventDefault(),this.month=n,this.switchView(e,"calendar")}selectYear(e,n){e.preventDefault(),this.year=n,this.switchView(e,"months")}renderLegend(){const e=new Date(Date.UTC(2015,0,1)),n=new Intl.DateTimeFormat(this.locales,{weekday:"short"}),r=[];for(let a=1;a<=7;a++)e.setDate(a),r.push(i("div",{class:"head-cell"},n.format(e)));return r}render(){return i("div",{class:"calendar-wrapper"},i("ion-grid",{class:"calendar-controls"},i("ion-row",null,i("ion-col",{size:"1",onClick:e=>this.navigate(e,!0)},i("ion-icon",{name:"arrow-back"})),i("ion-col",{class:"calendar-title",size:"10",onClick:e=>this.switchView(e,"calendar"===this.currentView?"months":"years")},this.getTitle()),i("ion-col",{size:"1",onClick:e=>this.navigate(e)},i("ion-icon",{name:"arrow-forward"})))),i("div",{class:{"calendar-grid":!0,viewing:"calendar"===this.currentView,range:this.range}},[...this.renderLegend(),...this.buildCalendar().map((e=>{const n=this.available&&-1===this.available.indexOf(e.dateString)||this.max&&e.dateString>this.max||this.min&&e.dateString<this.min||!1;return i("button",{class:{unavailable:n,"start-date":this.startDate===e.dateString,"end-date":this.endDate===e.dateString,selected:this.range&&this.endDate?this.startDate<=e.dateString&&this.endDate>=e.dateString:this.startDate&&this.startDate===e.dateString,cell:!0,faded:!e.inMonth},disabled:n,onClick:n=>this.onSelected(n,e.dateString),style:{gridColumn:`${e.x}`,gridRow:`${e.y}`}},e.number)}))]),i("div",{class:{"month-grid":!0,viewing:"months"===this.currentView}},i("ion-grid",null,i("ion-row",null,this.getMonths().map(((e,n)=>i("ion-col",{size:"4",onClick:e=>this.selectMonth(e,n)},i("div",{class:{cell:!0,selected:n===this.month}},e))))))),i("div",{class:{"year-grid":!0,viewing:"years"===this.currentView}},i("ion-grid",null,i("ion-row",null,this.getYears().map((e=>i("ion-col",{size:"4",onClick:n=>this.selectYear(n,e)},i("div",{class:{cell:!0,selected:e===this.year}},e))))))))}};r.style="fireenjin-calendar{display:block}fireenjin-calendar .calendar-controls{font-weight:var(--fireenjin-calendar-controls-font-weight, 800);font-family:var(--fireenjin-calendar-controls-font-weight, inherit);text-align:var(--fireenjin-calendar-controls-text-align, center)}fireenjin-calendar .calendar-controls ion-col{cursor:pointer}fireenjin-calendar .cell{font-size:var(--fireenjin-calendar-cell-font-size, 12pt);font-weight:var(--fireenjin-calendar-cell-font-weight, bolder);font-family:var(--fireenjin-calendar-cell-font-family, inherit);color:var(--fireenjin-calendar-cell-color, inherit);padding:var(--fireenjin-calendar-cell-padding, 15px 0);background-color:var(--fireenjin-calendar-cell-background, transparent);background:var(--fireenjin-calendar-cell-background, transparent);border:var(--fireenjin-calendar-cell-border, 1px solid #000);cursor:var(--fireenjin-calendar-cell-cursor, pointer) !important;text-align:var(--fireenjin-calendar-cell-text-align, center);position:relative}fireenjin-calendar .cell.selected{background:var(--fireenjin-calendar-selected-background, #000);font-weight:var(--fireenjin-calendar-selected-font-weight, 800);color:var(--fireenjin-calendar-selected-color, #fff) !important;opacity:1 !important}fireenjin-calendar .cell.faded{opacity:0.4}fireenjin-calendar .cell:hover{box-shadow:var(--fireenjin-calendar-hover-box-shadow, 0 0 0 3px inset #000);color:var(\n    --fireenjin-calendar-hover-color,\n    var(--fireenjin-calendar-selected-background, #000)\n  );font-weight:var(--fireenjin-calendar-hover-font-weight, 800);opacity:1 !important}fireenjin-calendar .cell.unavailable{box-shadow:none !important;font-weight:var(--fireenjin-calendar-cell-font-weight, normal);opacity:0.4 !important;cursor:not-allowed !important}fireenjin-calendar .calendar-grid,fireenjin-calendar .month-grid,fireenjin-calendar .year-grid{display:block;opacity:0;height:0;transition:all ease-out 0.4s;pointer-events:none;overflow:hidden}fireenjin-calendar .calendar-grid.viewing,fireenjin-calendar .month-grid.viewing,fireenjin-calendar .year-grid.viewing{opacity:1;height:auto;pointer-events:initial}fireenjin-calendar .calendar-grid{display:grid;grid-template-columns:repeat(7, 1fr);grid-auto-rows:1fr;grid-gap:var(--fireenjin-calendar-grid-gap, 3px);text-align:center}fireenjin-calendar .calendar-grid>.head-cell{font-size:var(--fireenjin-calendar-head-font-size, 13pt);font-weight:var(--fireenjin-calendar-head-font-weight, 300);margin:var(--fireenjin-calendar-head-margin, auto 0);padding:var(--fireenjin-calendar-head-padding, 0 0 5px 0)}fireenjin-calendar .range .start-date{border-radius:var(--fireenjin-calendar-selected-range-notch, 14px) 0 0 0}fireenjin-calendar .range .end-date{border-radius:0 0 var(--fireenjin-calendar-selected-range-notch, 14px) 0}";export{r as fireenjin_calendar}