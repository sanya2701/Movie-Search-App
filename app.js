var express = require("express");
var request = require("request");
var app = express();
var port = 3000;
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("search");
});

app.get("/results",function(req,res){
    var movie = req.query.movie;
    request("http://omdbapi.com/?s="+movie+"&apikey=thewdb",function(error,response,body){
      if(!error && response.statusCode==200)
      {
        var pData = JSON.parse(body);
        res.render("results",{pData:pData});
      }
   });
});

app.listen(port,function(){
  console.log("Movie App has started");
});
