//==================================================
//DEPENDENCIES
//==================================================

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");


//==================================================
//ROUTES
//==================================================
app.get("/",function(req,res)
{
		res.render("index");
		});

app.get("/*",function(req,res)
{
		res.render("index");
		});


app.listen(process.env.PORT || 3000, process.env.IP, () =>{
	console.log('Serv3r has started');
});