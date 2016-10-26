function myCreateFunction() {
  var year =document.getElementById("selectElementId").value;
  var table = document.createElement("table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = calendar(0, year);
  cell2.innerHTML = calendar(1, year);
  cell3.innerHTML = calendar(2, year);
  cell4.innerHTML = calendar(3, year);
  var row1 = table.insertRow(1);
  var cell5 = row1.insertCell(0);
  var cell6 = row1.insertCell(1);
  var cell7 = row1.insertCell(2);
  var cell8 = row1.insertCell(3);
  cell5.innerHTML = calendar(4, year);
  cell6.innerHTML = calendar(5, year);
  cell7.innerHTML = calendar(6, year);
  cell8.innerHTML = calendar(7, year);
  var row2 = table.insertRow(2);
  var cell9 = row2.insertCell(0);
  var cell10 = row2.insertCell(1);
  var cell11 = row2.insertCell(2);
  var cell12 = row2.insertCell(3);
  cell9.innerHTML = calendar(8, year);
  cell10.innerHTML = calendar(9, year);
  cell11.innerHTML = calendar(10, year);
  cell12.innerHTML = calendar(11, year);
  return table.outerHTML;
    
}

function refresh (){ 
  document.getElementById("mwaka").innerHTML = myCreateFunction();
}

function setToday() {
  var now   = new Date();
  var year  = now.getYear();
  document.getElementById("selectElementId").value = year;
  refresh();
}

function setPreviousYear() {
  var year  = document.getElementById("selectElementId").value;
  year--;
  document.getElementById("selectElementId").value = year;
  refresh();
}

function setNextYear() {
  var year = document.getElementById("selectElementId").value;
  year++;
  document.getElementById("selectElementId").value = year;
  refresh();
}

function selectDate() {
  var year = document.getElementById("selectElementId").value ;
  calendar(month, year);
}

function calendar(Month, Year) {
  // If no parameters are passed use the current date.
  if(Month == null && Year == null) {
      date = new Date();
      day = date.getDate();
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
  currentDate = currentDay.getDate();
  currentMonth = currentDay.getMonth();
  currentYear = currentDay.getFullYear();

  this_month = new Date(year, month, 1);
  console.log(this_month);

  // Find out when this month starts and ends.
  first_week_day = this_month.getDay();
  if (month == 1 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
    days_in_this_month = 29;
    } else {
    days_in_this_month = daysInAMonth[month];
    }
  calendar_html = '<table style = "background-color:#EEEEEE; color:ffffff;">';
  calendar_html += '<tr style = "border: 2px solid black;"><td colspan = "7" style="background-color:#70C469; color:000000; text-align: center;">' + months[month] + ' ' + year + '</td></tr>';
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

    // Highlight the current day.
    console.log(currentYear, Year);
    if(currentDate == day_counter && currentMonth == Month && currentYear == parseInt(Year))
      calendar_html += '<td style="text-align: center; background-color:#ff0043;"><b>' + day_counter + '</b></td>';
    else
      calendar_html += '<td style="background-color:9999cc; color:000000; text-align: center;"> ' + day_counter + ' </td>';

    week_day++;
  }

  calendar_html += '</tr>';
  calendar_html += '</table>';

  // Display the calendar.
 return calendar_html;
}