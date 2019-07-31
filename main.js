var merchantSales = 312.50;
var dasherSales = 512.80;

$(document).ready(function(){  

    //This is hard coded, but will need to make functions to get default date of last month
    var defaultStart = '2019-08-01';
    var defaultEnd = '2019-08-02';
    $('#pickerStart').val(defaultStart);
    $('#pickerEnd').val(defaultEnd);

    //This initates the first load from the default dates
    pieRequest(defaultStart, defaultEnd);

    //This will be handeling users date sepcs
    $('#pieSubmit').click(function(e){
        e.preventDefault();
        var startDate = $('#pickerStart').val();
        var endDate = $('#pickerEnd').val();        
        pieRequest(startDate, endDate)
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
            console.log(response)
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



