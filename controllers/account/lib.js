const User = require('../../schema/schemaUser');
const passwordHash = require("password-hash");

function signup(req, res) {
    if(!req.body.email || req.body.password) {
        res.status(400).json({
            "text": 'Invalid Request'
        })
    } else {
        var user = {
            email: req.body.email,
            password: passwordHash.generate(req.body.password)
        }
        var findUser = new Promise(function (resolve, reject) {
            User.findOne({
                email: user.email
            }, function (err,result) {
                if (err) {
                    reject(500);
                } else {
                    if (result) {
                        reject(204)
                    }else {
                        resolve(true)
                    }
                }
            })
        })
    
        findUser.then(function() {
            var _u = new User(user);
            _u.save(function (err, user) {
                if (err) {
                    res.status(500).json({
                        "text": "Internal Error"
                    })
                } else {
                    res.status(200).json({
                        "text": "Success",
                        "token": user.getToken()
            })
         }
        })
     },
      function (error) {
        switch (error) {
            case 500:
                res.status(500).json({
                    "text": "Intrernal Error"
                })
                break;
            case 204:
                res.status(204).json({
                    "text": "Email adress already exist"
                })
                break;
            default:
                res.status(500).json({
                    "text": "internal error"
                })
        }
    })
    }
    }
    
    function login(req, res) {
        if (!req.body.email || !req.body.password) {
            //Password or Email not submitted or Null
            res.status(400).json({
                "text": "Invalide Request"
            })
        } else {
            User.findOne({
                email: req.body.email
            }, function (err, user) {
                if (err) {
                    res.status(500).json({
                        "text": "internal error"
                    })
                } else if (!user) {
                    res.status(401).json({
                        "text": "User Does'nt exsit"
                    })
                } else {
                    if (user.authenticate(req.body.password)) {
                        res.status(200).json({
                            "token": user.getToken(),
                            "text": "Welcome Back"
                        })
                    } else {
                        res.status(401).json({
                            "text": "Password Incorrect"
                        })
                    }
                }
            })
        }
    }
    
    
    exports.login = login;
    exports.signup = signup;