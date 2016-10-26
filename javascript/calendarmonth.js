function refresh (){ 
  document.getElementById("relod").innerHTML = "";
  selectDate();
}

function setToday() {
  var todaydate   = new Date();
  var day   = todaydate.getDate();
  var month = todaydate.getMonth();
  var year  = todaydate.getYear();
  if (year < 2000) 
  year = year + 1900; 
  this.focusDay = day;
  document.getElementById("monthValue").value = month;
  document.getElementById("selectElementId").value = year;
  refresh();
  //console.log(year, month, day);
}

function setPreviousYear() {
  var year  = document.getElementById("selectElementId").value;
  var day   = 0;
  var month = document.getElementById("monthValue").value;
  year--;
  document.getElementById("selectElementId").value = year;
  refresh();
}

function setPreviousMonth() {
  var year  = document.getElementById("selectElementId").value;
  var day   = 0;
  var month = document.getElementById("monthValue").value;
  if (month == 0) {
    month = 11;
    if (year > 1000) {
      year--;
      document.getElementById("selectElementId").value = year;
      }
  } else { month--; }
  document.getElementById("monthValue").value = month;
refresh();
}

function setNextMonth() {
  var year  = document.getElementById("selectElementId").value;
  var day   = 0;
  var month = document.getElementById("monthValue").value;
  if (month == 11) {
    month = 0;
    year++;
    document.getElementById("selectElementId").value = year;
  } else { month++; }
  document.getElementById("monthValue").value = month;
  refresh();
}

function setNextYear() {
  var year = document.getElementById("selectElementId").value;
  var day = 0;
  var month = document.getElementById("monthValue").value;
  year++;
  document.getElementById("selectElementId").value = year;
  refresh();
}

function selectDate() {
  var month =   document.getElementById("monthValue").value;
  var year = document.getElementById("selectElementId").value ;
  calendar(month, year);
}

function calendar(Month, Year) {
  // If no parameter is passed use the current date.
  if(Month == null && Year == null) {
      date = new Date();
      day = date.getDay();
      month = date.getMonth();
      year = date.getFullYear();
} else {
    date = new Date();
    day = date.getDate();
    month = Month;
    year = Year;
}

  months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
  daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentDay = new Date();
  //console.log('currentDay', currentDay)
  currentDate = currentDay.getDate();
   //console.log('currentDate', currentDate)
  currentMonth = currentDay.getMonth();
  currentYear = currentDay.getFullYear();

  this_month = new Date(year, month, 1);
  //console.log(this_month);

  // Find out when this month starts and ends.
  first_week_day = this_month.getDay();
    if (month == 1 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
      days_in_this_month = 29;
    } else {
      days_in_this_month = daysInAMonth[month];
  }
  //console.log(days_in_this_month);
  calendar_html = '<table class = "monthtable" style = "background-color:#EEEEEE; color:ffffff; width: 80%; margin: 0 auto 20px auto; -webkit-box-shadow: 10px 10px 5px #898989;">';
  calendar_html += '<tr style = "border: 2px solid black;"><td colspan = "7" style = "background-color:#70C469; color:000000; text-align: center; font-size: 30px;">' + months[month] + ' ' + year + '</td></tr>';
  calendar_html += '<tr style = "text-align: center;"><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thur</td><td>Fri</td><td>Sat</td></tr>';
  calendar_html += '<tr>';

  // Fill the first week of the month with the appropriate number of blanks.
  for(week_day = 0; week_day < first_week_day; week_day++) {
    calendar_html += '<td style = "background-color:9999cc; color:000000;"> </td>';
  }

  week_day = first_week_day;
  for(day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
    week_day %= 7;
    if(week_day == 0)
      calendar_html += '</tr><tr>';

    // Higlight the current day.
    //console.log(currentYear, Year);
    if(currentDate == day_counter && currentMonth == Month && currentYear == parseInt(Year)){

         console.log('day_counter',day_counter, 'currentDate', currentDate, Month, parseInt(Year));
      calendar_html += '<td style = "text-align: center; background-color:royalblue;"><b>' + day_counter + '</b></td>';}
    else{
      calendar_html += '<td style = "background-color:9999cc; color:000000; text-align: center;"> ' + day_counter + ' </td>';}




    week_day++;
  }

  calendar_html += '</tr>';
  calendar_html += '</table>';

  // Display the calendar.
 document.getElementById("relod").innerHTML += calendar_html;
}
