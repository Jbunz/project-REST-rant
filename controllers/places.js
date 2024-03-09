const router = require("express").Router();

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "Lunas",
      city: "Escondido",
      state: "CA",
      cuisines: "Mexican",
      pic: "/images/Tacos.jpg",
    },
    {
      name: "Louis",
      city: "San Diego",
      state: "CA",
      cuisines: "Italian",
      pic: "/images/Pasta.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
