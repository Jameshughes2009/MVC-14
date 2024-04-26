const { User } = require('../models');


// user info 

const userData = [
    {
        username: "jamesh",
        email: "james@test.com",
        password:"Testpassword",
    },
    {
        username: "oldfart",
        email: "oldfart@microbix.com",
        password: "password134"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;