var merchantSales = 312.50;
var dasherSales = 512.80;

$(document).ready(function(){  

    //Default days for data
    var defaultStart = firstDayMonth();
    var defaultEnd = lastDayMonth();
    $('#pickerStart').val(defaultStart);
    $('#pickerEnd').val(defaultEnd);

    //This initates the first load from the default dates
    pieRequest(defaultStart, defaultEnd);

    //This will be handeling users date sepcs
    $('#pieSubmit').click(function(e){
        e.preventDefault();
        var startDate =  flipYear($('#pickerStart').val());
        var endDate = flipYear($('#pickerEnd').val());     
        var validDate = dateCompare(startDate, endDate);
        pieRequest(startDate, endDate); 
    })

})

//This function draws the chart
function pieRequest(start, end){
    //Should be an error handler to make sure dates are accurate. 
    $.ajax({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            WebsiteID: 93,
            DateRange: {
                StartDate: start,
                EndDate: end
            }
        },
        success: function(response) {
            // merchantSales = response.Categories[0].Sales.Total;
            // dasherSales = response.Categories[1].Sales.Total;
             //Setting the animation
            am4core.useTheme(am4themes_animated);

            //Initating chart
            var chart = am4core.create("chartdiv", am4charts.PieChart3D);

            //Adding legends
            chart.legend = new am4charts.Legend();

            //This makes it a doughnut chart
            chart.innerRadius = am4core.percent(40);

            //Chart data
            chart.data = [
                {
                    "category": "Merchant",
                    "sales": merchantSales
                }, 
                {
                    "category": "Dasher",
                    "sales": dasherSales
                },
            ];

            //Setting the instance
            var pieSeries = chart.series.push(new am4charts.PieSeries3D());
            pieSeries.dataFields.value = "sales";
            pieSeries.dataFields.category = "category";

            //This is purley cosmetic. adding borders to slices. 
            pieSeries.slices.template.stroke = am4core.color("#FFFFFF");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
        }
    })
}

var todaysDay = function(){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (yyyy+'-'+mm+'-'+dd);
};

var firstDayMonth = function(){
    today = new Date();
    var dd = 01;
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd
    if(mm<10) mm='0'+mm;
    return (yyyy+'-'+mm+'-'+dd);
}

var lastDayMonth = function(){
    today = new Date();
    var dd;
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    
    if(mm === 2){
        dd = 28;
    }else if(mm === 4 || mm === 6 || mm === 9 || mm === 11){
        dd = 30;
    }else {
        dd = 31;
    }
    if(dd<10) dd='0'+dd
    if(mm<10) mm='0'+mm;
    return (yyyy+'-'+mm+'-'+dd);
}

var flipYear = function(date){
    var oldArr = date.split('');
    var dayAndMonth = oldArr.slice(5)
    dayAndMonth.push('-')
    var year = oldArr.slice(0, 4)
    var flippedYear = dayAndMonth.concat(year).join('');
    return flippedYear;
}

function dateCompare(date1, date2){
    if(new Date(date2) > new Date(date1)){
        return true;
    } else if(new Date(date2) == new Date(date1)) {
        return true;
    } else {
        return false;
    }
}