$(document).ready(function(){
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&units=metric&APPID=2de143494c0b295cca9337e1e96b00e0";

    $.ajax({
        url: apiUrl,
        dataType: "json",
        success: function(data){
            $('#jokes').append('<p>' +data.value + '</p>');
},
        error: function(){
            $('#jokes').append('<p>Er is iets mis gegaan</p>');
        }
    });
});
