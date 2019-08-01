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