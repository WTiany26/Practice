var a,b,c
$(document).ready(function(){
$("#find").click(function(){
  var d=$("#input").val();
  $.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q='+d+'&mode=json&units=imperial&APPID=77ebdef2a5abca6c0d6052096161caaa',
  success: function(weather_data){
   a=weather_data.main.temp;
   b=weather_data.weather[0].description;
   c=weather_data.name;
   display();
   $("#input").val('')
  }
  })
});
});

function display() {
  $("header").text('');
  $("h1").text(c);
  $("header").append("Temp : "+((parseFloat(a)-32)* 5/9).toFixed(0) + " degrees" + "<br/> Description : " + b);
}
