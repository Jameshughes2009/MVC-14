// const seedUsers = require('./userSeeds');
// const seedPosts = require('./postSeeds');


// const sequelize = require('../config/connection');

// //Function to seed all indo 

// const seedAll = async () => {
//     await sequelize.sync({ force: true});
//     await seedUsers();
//         // console.log("users seeded");
//     await seedPosts();
//     process.exit(0);
// };

// seedAll();
const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');


const sequelize = require('../config/connection');

//Function to seed all indo 

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUsers();
        console.log("users seeded");
    await seedPosts();
    process.exit(0);
};

seedAll();


