$(document).ready(function(){  

    //Default days for calanders
    var defaultStart = firstDayMonth();
    var defaultEnd = lastDayMonth();
    $('#pickerStartPie').val(defaultStart);
    $('#pickerEndPie').val(defaultEnd);
    $('#pickerStartBar').val(defaultStart);
    $('#pickerEndBar').val(defaultEnd);

    //This initates the first load from the default dates
    pieRequest(defaultStart, defaultEnd);
    barRequest(defaultStart, defaultEnd, null, null);

    //This will be handeling users date sepcs
    $('#pieSubmit').click(function(e){
        e.preventDefault();
        var startDate =  flipYear($('#pickerStartPie').val());
        var endDate = flipYear($('#pickerEndPie').val());     
        var validDate = dateCompare(startDate, endDate);
        pieRequest(startDate, endDate); 
    })

    $('#clear-button').click(function(e){
        e.preventDefault();
        $("#radio-dash").prop("checked", false);
        $("#radio-merch").prop("checked", false);
    })

    $('#barSubmit').click(function(e){
        e.preventDefault();
        var startDate =  flipYear($('#pickerStartPie').val());
        var endDate = flipYear($('#pickerEndPie').val());     
        var validDate = dateCompare(startDate, endDate);
        var barProgram = null;
        if($('#barProgram').val() !== 'All'){
            barProgram = $('#barProgram').val();
        }
        var barPurchaser = null;
        if($("#radio-merch").prop("checked")){
            barPurchaser = 'Merchant'
        } else if($("#radio-dash").prop("checked")){
            barPurchaser = 'Dasher'
        }

        barRequest(startDate, endDate, barProgram, barPurchaser); 
    })


})



