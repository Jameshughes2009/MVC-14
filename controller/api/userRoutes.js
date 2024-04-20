const router = require('express').Router();
const { json } = require('sequelize');
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ["password"]},
    })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});


// New sign up function 
router.post('/signup', async (req, res) => {
    try {
        const newUser = new User();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        const userData = await newUser.save();
        req.session.save(() =>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err)
    }
});

// The Functions used to login 

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: {username: req.body.username} });
        if(!userData){
            res
                .status(400)
                .json({ message: "Invalid Login info Please try again"});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword){
            res.status(400).json({message: "Invalid Login info Please try again"});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res
                .status(200)
                ,json({ user: userData, message: "You have loged in"})
        })
    }
})