    // globals
    var calendar = [];
    var curDate;
    var curWeekBeginDate; // sunday of the week
    var curWeekEndDate    // saturday


    function prevWeek() {
       
        curWeekBeginDate.subtract(7, "day");
        curWeekEndDate.subtract(7, "day");
        renderCalendar();
    }

    function nextWeek() {
       
        curWeekBeginDate.add(7, "day");
        curWeekEndDate.add(7, "day");
        renderCalendar();
    }



    // Month dd, YYYY format
    function dateToStr(moment) {
        return moment.format("MMM D, YYYY");
    }

    function renderWeekTitle() {
        var weekTitleStr = "";
        
        weekTitleStr += dateToStr(curWeekBeginDate) + " - ";  
        weekTitleStr += dateToStr(curWeekEndDate);

        $("#week-title").text(weekTitleStr);
    }

    function renderCalendar() {
       

        renderWeekTitle();

       

        var scheduleHTML = '<tr class="active">' +
                              '<td>Time</td>';
        var iterateDate = curWeekBeginDate.clone();
        var halfHour = false; // used to alternate between half and full hours
        for (var i = 0; i < 7; i++) {
          scheduleHTML += '<td>' + iterateDate.format("ddd MMM D") + '</td>';
          iterateDate.add(1, 'day');
        };
        scheduleHTML += '</tr>';

       

        // two cells per hour
        for (var i = 0; i < 49; i++) {
            scheduleHTML += "<tr>" + 
                                "<td style='background-color:#70C469; color:000000; text-align: center;'>" + Math.floor(i/2) + ":" + ((halfHour) ? "30" : "00") + "</td>";
                for (var j = 0; j < 7; j++) {
                    scheduleHTML += "<td style='background-color:white; color:000000; text-align: center;'></td>";
                }
            scheduleHTML += "</tr>";
            halfHour = !halfHour;
        };
        $("table").html(scheduleHTML);
    }

    function initCalendar() {
      curDate = moment();
      curWeekBeginDate = moment();
      curWeekEndDate = moment();

      // get day of week
      curWeekBeginDate.startOf("week");
      curWeekEndDate.endOf("week");

      renderCalendar();
    }

    $(document).ready(function(){
        $.material.init();
        initCalendar();

    });

