const router = require('express').Router()

  // GET /places
app.get('/', (req, res) => {
        let places = [{
            name: 'Lunas',
            city: 'Escondido',
            state: 'CA',
            cuisines: 'Mexican',
            pic: 'http://placekitten.com/250/250'
          }, {
            name: 'Louis',
            city: 'San Diego',
            state: 'CA',
            cuisines: 'Italian',
            pic: 'http://placekitten.com/250/250'
          }]
    
    res.render('places/index', { places })
  })
  
module.exports = router

