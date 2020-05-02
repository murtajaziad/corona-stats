const { Router } = require("express"),
	router = Router(),
	{ get } = require("axios");

router.get("/", async (req, res) => {
	let world = await get("https://corona.lmao.ninja/v2/all"),
		countries = await get("https://corona.lmao.ninja/v2/countries?sort=cases&yesterday=false");

	res.render("index", {
		world: world.data,
		countries: countries.data
	});
});

module.exports = router;