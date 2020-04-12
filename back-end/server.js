const express = require('express');
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/Operators',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/operators', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const operatorSchema = new mongoose.Schema({
  id: String,
  operator: String,
  name: String,
  image: String,
  role: String,
  gadget: String,
  bio: String
});

// Create a model for items in the museum.
const Operator = mongoose.model('Operator', operatorSchema);

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  bio: String,
  favorite_operator: [mongoose.Schema.Types.ObjectId],
});

const User = mongoose.model('User', userSchema);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/api/recipes', async (req, res) => {
  try {
    let recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

app.post('/api/recipes', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    difficulty: req.body.difficulty,
    image: req.body.image,
    ingredients: req.body.ingredients,
    recipe: req.body.recipe,
    imageSource: req.body.imageSource,
    recipeSource: req.body.recipeSource
  });
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.get('/api/operators/:id', async (req, res) => {
  try {
    let recipe = await Operator.findOne({
      _id: req.params.id
    });;
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

app.delete('/api/operators/:id', async (req, res) => {
  try {
    await Operators.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/operators/:id', async (req, res) => {
  try {
    let recipe = await Operator.findOne({
      _id: req.params.id
    });
    operator.operator = req.body.operator;
    operator.name = req.body.name;
    operator.image = req.body.image;
    operator.role = req.body.role;
    operator.gadget = req.body.gadget;
    operator.bio = req.body.bio;
    await operator.save();
    res.send(operator);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

app.post('/api/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    bio: req.body.bio,
    experience: req.body.experience
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.params.id
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/favorite', async (req, res) => {
  try {
    let user = await User.findOne({
      username: req.body.username
    });
    if (user === null) {
      res.status(404)
        .send('Error: User not found');
      return;
    }
    let recipe = await Recipe.findOne({
      _id: req.body.recipeID
    })
    if (recipe === null) {
      res.status(404)
        .send('Error: Recipe not found')
      return;
    }
    if (!user.favorite_recipes.find(arecipe =>
        arecipe.equals(recipe.id)
      )) {
      user.favorite_recipes.push(recipe)
    } else {
      let message = recipe.name + " is already in favorites for " + user.username;
      res.send(message);
      return;
    }
    await user.save();
    let message = recipe.name + " has been added to favorites for " + user.username;
    res.send(message);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/unfavorite', async (req, res) => {
  try {
    let user = await User.findOne({
      username: req.body.username
    });
    if (user === null) {
      res.status(404)
        .send('Error: User not found');
      return;
    }
    let recipe = await Recipe.findOne({
      _id: req.body.recipeID
    });

    if (user.favorite_recipes.find(arecipe =>
        arecipe.equals(recipe.id)
      )) {
      user.favorite_recipes = user.favorite_recipes.filter(arecipe =>
        !(arecipe.equals(recipe.id)));
    } else {
      res.status(404)
        .send('Error: Recipe not in favorites')
      return;
    }
    await user.save();
    let message = recipe.name + " has been removed from favorites for " + user.username;
    res.send(message);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.params.id
    });
    user.name = req.body.name;
    user.username = req.body.username;
    user.bio = req.body.bio;
    user.experience = req.body.experience;
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
