const express = require("express"),
	app = express();


app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", require("./routes/index.js"));
app.use(express.static("public"));

app.listen(3000, () => console.log("Listening.."));