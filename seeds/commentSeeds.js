const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Cool Review",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'New test',
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: 'Windows is cool',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments