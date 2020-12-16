$(document).ready(function(){

    var hour = moment().hours();

    
    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do'));
    };

    function color(){
        $("input").each(function(){
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour){
                $(this).addClass("today");
            } else if (rowNumber < hour){
                $(this).addClass("past");
            } else {
                $(this).addClass("tomorrow");
            };
        });
    };

    function inputs(){
        $(".event").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    
    $(".save").click(function(){
        var userActivity = $(this).siblings(".event").val();
        var activityStorage = $(this).siblings(".event").attr("id");
        localStorage.setItem(activityStorage,userActivity);
    });

    setInterval(getDate,1000);
    color();
    setInterval(color,1000);
    inputs();

});