const { Post } = require('../models');

const postData = [
    {
        title: "New iPad Air is Cool",
        content: "New Ipad is faster than old",
        user_id: 1,
    },
    {
        title: "Windows is Better than Mac",
        content: "I was told to get a window computer by UofT",
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;