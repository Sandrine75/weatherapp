var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var cityList = [
    {city: "Lyon", temps : "nuageux", degree: "26°C", degree2: "17°C"},
    {city: "Paris", temps : "ciel degager", degree: "24.3°C", degree2: "13.2°C"},
    {city: "Marseille", temps : "ciel degager", degree: "22.4°C", degree2: "14°C"}
];
                
app.get('/home', function (req, res) {
    res.render('home', {city : cityList});
});
app.get('/lire', function (req, res) {
    res.render('home', {city : cityList});
});
app.get('/add', function(req, res){
    cityList.push(req.query);
    res.render("cityList", {city : cityList});
});
app.get('/delete', function (req, res) {
    console.log(req.query.i);
    cityList.splice(req.query.i, 1);
    res.render("clientList", {city : cityList});
});

<!-- connection de l api weather -->
    /*request("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=f23487680edbe8a6cf6b75aea512c77a", function(error, response, body) {
    var body = JSON.parse(body);
    console.log(body.weather[0].description);
    });*/
<!-- fin de connection de l api weather -->




app.listen(8080, function () {
  console.log("Server listening on port 8080");
});

