const router = require('express').Router();
const User = require('./../models/User');
const bcrypt = require('bcrypt-nodejs');

// Route for registering a new user
router.post('/register', async (request, response, next) => {
  try {
    // Generate a hashed version of the password
    let salt = null;
    await bcrypt.genSalt(10, (error, result) => { salt = result });
    let hashedPassword = null;
    await bcrypt.hash(request.body.password, salt, null, (error, result) => { hashedPassword = result });

    // Create the new user model
    const newUser = await new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
      });

    // Save the password to the database
    const user = await newUser.save();
    response.status(200).json(user);
  } catch(error) {
    next(error);
  }
});

// Route for logging in
router.post('/login', async (request, response, next) => {
  try {
    // Get user in the database with matching credentials and report if not found
    const user = await User.findOne({ email: request.body.email });
    if (!user) response.status(404).json('No account with that username and email');

    // Check if the proper password is entered and report if not found
    let validPassword = false;
    await bcrypt.compare(request.body.password, user.password, (error, result) => { validPassword = result; });


    if (!validPassword) response.status(400).json('Incorrect password');

    response.status(200).json(user);
  } catch(error) {
    next(error);
  }
});

module.exports = router;