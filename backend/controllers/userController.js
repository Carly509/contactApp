let User = require('../models/user_model');


//create user
exports.user_create = function (req, res) {
    const newUser = new User (req.body);
    newUser.save()
    .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
};

//update user
exports.user_update = function (req, res) {
    User.findById(req.params.id)
    .then(user => {
        user = req.body;
        user.save()
        .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
    })
};

// delete user 
exports.user_delete = function (req, res ) {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};

//create salt &hash
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(newUser.password, salt, (err,hash) => {
//     if (err) throw err;
//     newUser.save()
//     .then(user => {
//       res.json({
//         user: {
//           id: user.id,
//           name:user.name,
//           email: user.email
//         }
//       });
//     });
//   })
// })