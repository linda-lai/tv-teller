// DEPENDENCIES
const express = require('express');
const Joi = require('joi'); 

// APP & ENVIRONMENT INSTANCES
const app = express();
const port = process.env.PORT || 5000;

// DATABASE
const tvArray = [
  {
    "id": 1,
    "name": "The IT Crowd",
    "creator": [
      "Graham Lineham"
    ],
    "cast": [
      "Chris O'Dowd",
      "Richard Ayoade",
      "Katherine Parkinson",
      "Matt Berry"
    ],
    "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/The_IT_Crowd_title_card.jpg",
    "seasons": [
      {
        "series": 1,
        "episodes": [
          {
            "episode": 1,
            "title": "Yesterday's Jam"
          },
          {
            "episode": 2,
            "title": "Calamity Jen"
          },
          {
            "episode": 3,
            "title": "Fifty-Fifty"
          },
          {
            "episode": 4,
            "title": "The Red Door"
          },
          {
            "episode": 5,
            "title": "The Haunting of Bill Crouse"
          },
          {
            "episode": 6,
            "title": "Aunt Irma Visits"
          }
        ]
      },
      {
        "series": 2,
        "episodes": [
          {
            "episode": 1,
            "title": "The Work Outing"
          },
          {
            "episode": 2,
            "title": "Return of the Golden Child"
          },
          {
            "episode": 3,
            "title": "Moss and the German"
          },
          {
            "episode": 4,
            "title": "The Dinner Party"
          },
          {
            "episode": 5,
            "title": "Smoke and Mirrors"
          },
          {
            "episode": 6,
            "title": "Men Without Women/The Joy of Sex"
          }
        ]
      },
      {
        "series": 3,
        "episodes": [
          {
            "episode": 1,
            "title": "From Hell"
          },
          {
            "episode": 2,
            "title": "Are We Not Men?"
          },
          {
            "episode": 3,
            "title": "Tramps Like Us"
          },
          {
            "episode": 4,
            "title": "The Speech"
          },
          {
            "episode": 5,
            "title": "Friendface"
          },
          {
            "episode": 6,
            "title": "Calendar Geeks"
          }
        ]
      },
      {
        "series": 4,
        "episodes": [
          {
            "episode": 1,
            "title": "Jen the Fredo"
          },
          {
            "episode": 2,
            "title": "The Final Countdown"
          },
          {
            "episode": 3,
            "title": "Something Happened"
          },
          {
            "episode": 4,
            "title": "Italian for Beginners"
          },
          {
            "episode": 5,
            "title": "Bad Boys"
          },
          {
            "episode": 6,
            "title": "Reynholm vs Reynholm/Douglas and Divorce"
          }
        ]
      },
      {
        "series": 5,
        "episodes": [
          {
            "episode": 1,
            "title": "The Internet is Coming"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Black Books",
    "creator": [
      "Dylan Moran",
      "Graham Lineham"
    ],
    "cast": [
      "Dylan Moran",
      "Bill Bailey",
      "Tamsin Greig"
    ],
    "url": "https://upload.wikimedia.org/wikipedia/en/8/83/Black_Books_titles.jpg",
    "episodes": [
      {
        "series": 1,
        "episodes": [
          {
            "episode": 1,
            "title": "Cooking the Books"
          },
          {
            "episode": 2,
            "title": "Manny's First Day"
          },
          {
            "episode": 3,
            "title": "Grapes of Wrath"
          },
          {
            "episode": 4,
            "title": "The Blackout"
          },
          {
            "episode": 5,
            "title": "The Big Lock-Out"
          },
          {
            "episode": 6,
            "title": "He's Leaving Home"
          }
        ]
      },
      {
        "series": 2,
        "episodes": [
          {
            "episode": 1,
            "title": "The Entertainer"
          },
          {
            "episode": 2,
            "title": "Fever"
          },
          {
            "episode": 3,
            "title": "The Fixer"
          },
          {
            "episode": 4,
            "title": "Blood"
          },
          {
            "episode": 5,
            "title": "Hello Sun"
          },
          {
            "episode": 6,
            "title": "A Nice Change"
          }
        ]
      },
      {
        "series": 3,
        "episodes": [
          {
            "episode": 1,
            "title": "Manny Come Home"
          },
          {
            "episode": 2,
            "title": "Elephants and Hens"
          },
          {
            "episode": 3,
            "title": "Moo-Ma and Moo-Pa"
          },
          {
            "episode": 4,
            "title": "A Little Flutter"
          },
          {
            "episode": 5,
            "title": "Travel Writer"
          },
          {
            "episode": 6,
            "title": "Party"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "The Office",
    "creator": [
      "Ricky Gervais",
      "Stephen Merchant"
    ],
    "cast": [
      "Ricky Gervais",
      "Martin Freeman",
      "Mackenzie Crook",
      "Lucy Davis"
    ],
    "url": "https://upload.wikimedia.org/wikipedia/en/7/7e/Theoffice.jpg",
    "episodes":[
      {
        "series": 1,
        "episodes": [
          {
            "episode": 1,
            "title": "Downsize"
          },
          {
            "episode": 2,
            "title": "Work Experience"
          },
          {
            "episode": 3,
            "title": "The Quiz"
          },
          {
            "episode": 4,
            "title": "Training"
          },
          {
            "episode": 5,
            "title": "New Girl"
          },
          {
            "episode": 6,
            "title": "Judgement"
          }
        ]
      },
      {
        "series": 2,
        "episodes": [
          {
            "episode": 1,
            "title": "Merger"
          },
          {
            "episode": 2,
            "title": "Appraisals"
          },
          {
            "episode": 3,
            "title": "Party"
          },
          {
            "episode": 4,
            "title": "Motivation"
          },
          {
            "episode": 5,
            "title": "Charity"
          },
          {
            "episode": 6,
            "title": "Interview"
          }
        ]
      },
      {
        "series": 3,
        "episodes": [
          {
            "episode": 1,
            "title": "Christmas Special - Episode One"
          },
          {
            "episode": 2,
            "title": "Christmas Special - Episode Two"
          }
        ]
      }
    ]
  }
]

// MIDDLEWARE
app.use(express.json());

// REQUESTS
// 'GET' REQUEST: '/'
// (req, res) are objects => req.params, res.send
app.get('/', (req, res) => {
  return res.send('Hello world. From 2.0 MERN API!');
});

// 'GET' REQUEST: '/shows'
app.get('/shows', (req, res) => {
  return res.send(tvArray)
});

// 'GET' REQUEST: '/shows/:id'
app.get('/shows/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const tvShow = tvArray.find( tvShow => tvShow.id === id);

  if (!tvShow) {
    return res.send('TV show not found!')
  }

  return res.send(tvShow);
});

// 'POST' REQUEST: '/shows/'
app.post('/shows', (req, res) => {
  const { id, name, creator, cast, url, seasons } = req.body;
  const newShow = { id, name, creator, cast, url, seasons };

  const { error } = validateShow(newShow);
  if (error) return res.status(400).send(error.details[0].message);

  tvArray.push(newShow);
  return res.send(newShow);

})

// 'PUT' REQUEST: '/shows/:id'
app.put('/shows/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const tvShow = tvArray.find(tvShow => tvShow.id === id);

  if (!tvShow) {
    res.status(404).send('Show not found!')
  }

  const { error } = validateShow(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  tvShow.id = req.body.id;
  tvShow.name = req.body.name;
  tvShow.creator = req.body.creator;
  tvShow.cast = req.body.cast;
  tvShow.url = req.body.url;
  tvShow.seasons = req.body.seasons;

  res.send(tvShow);

});

// 'DELETE' REQUEST: '/shows/:id'
app.delete('/shows/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const tvShow = tvArray.find(tvShow => tvShow.id === parseInt(id));
  if (!tvShow) {
    return res.status(404).send('Show not found!')
  }
  const index = tvArray.indexOf(tvShow);
  tvArray.splice(index, 1);
  return res.send(tvArray)
});

// VALIDATION
function validateShow(tvShow) {
  const schema = {
    id: Joi.number().required(),
    name: Joi.string().required(),
    creator: Joi.array().required(),
    cast: Joi.array().required(),
    url: Joi.string().required(),
    seasons: Joi.array().required(),
  };
  return Joi.validate(tvShow, schema);
}

// PORT
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})