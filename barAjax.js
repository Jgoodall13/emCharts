function barRequest(start, end, program, purchaser) {

    $.ajax({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            WebsiteID: 93,
            CategoryId: purchaser,
            Program: program,
            Top: 5,
            DateRange: {
                StartDate: start,
                EndDate: end,
            },
        },
        success: function(response) {

            //Response Object
            // for(var i = 0; i < topFiveProducts.length; i++){
            //     topFiveProducts[i].name = response.Products[i].Name;
            //     topFiveProducts[i].sales.total = response.Products[i].Sales.Total;
            //     topFiveProducts[i].sales.Orders = response.Products[i].Sales.Orders;
            // }

            // Apply chart themes
            am4core.useTheme(am4themes_animated);
            // am4core.useTheme(am4themes_kelly);

            // Create chart instance
            var chart = am4core.create("barchartdiv", am4charts.XYChart);

            chart.marginRight = 400;

            // Add data
            chart.data = [
                {
                "name": topFiveProducts[0].name,
                "sales": topFiveProducts[0].sales.total,
                "orders": topFiveProducts[0].sales.orders
                }, 
                {
                "name": topFiveProducts[1].name,
                "sales": topFiveProducts[1].sales.total,
                "orders": topFiveProducts[1].sales.orders
                },
                {
                "name": topFiveProducts[2].name,
                "sales": topFiveProducts[2].sales.total,
                "orders": topFiveProducts[2].sales.orders
                },
                {
                "name": topFiveProducts[3].name,
                "sales": topFiveProducts[3].sales.total,
                "orders": topFiveProducts[3].sales.orders
                },
                {
                "name": topFiveProducts[4].name,
                "sales": topFiveProducts[4].sales.total,
                "orders": topFiveProducts[4].sales.orders
                }
            ];


            // Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "name";
            categoryAxis.title.text = "Top Five Selling Products";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 20;


            var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Total Sales ($)";

            // Create series sales
            var series1 = chart.series.push(new am4charts.ColumnSeries3D());
            series1.dataFields.valueY = "sales";
            series1.dataFields.categoryX = "name";
            series1.name = "Sales";
            series1.tooltipText = "Sales: [bold]${valueY}[/]";
            // series1.tooltipText = "{name}: [bold]{valueY}[/]"; <-- original. But name is being werid. 
            series1.stacked = true;

            // Create series orders I know this isn't right because it's stacking, but I wanted to get the info in.
            var series2 = chart.series.push(new am4charts.ColumnSeries3D());
            series2.dataFields.valueY = "orders";
            series2.dataFields.categoryX = "name";
            series2.name = "Sales";
            series2.tooltipText = "Orders: [bold]{valueY}[/]";
            series2.stacked = true;


            // Add cursor
            chart.cursor = new am4charts.XYCursor();

        }
    })

}