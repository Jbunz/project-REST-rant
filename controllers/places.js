const router = require("express").Router();
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

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

// GET /places
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})



router.get("/", (req, res) => {
  res.render("places/index", { places });
});

module.exports = router;
