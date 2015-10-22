var http = require("http"),
	express = require("express"),
	jade = require("jade");

var server = express();

server.set("port", process.env.PORT || 3000);
server.use(express.static(__dirname));
server.set("views", "views");
server.set("view engine", "jade");

server.get("/", function(req, res) {
	res.render("index");
});
server.get("/styleGuide", function(req, res) {
	res.render("styleGuide");
});

server.listen(server.get("port"), function() {
	console.log("server started on localhost:" + server.get('port') + "; press Ctrl-C to terminate.");
});