var models = require('../models');
// models.messages
// models.users

module.exports = {

  messages: {

    get: function (req, res) {

      // console.log('we got here1');
      // res.statusCode = 200;
      var result = models.messages.get((err, results) => {
        // handle err
        res.json(results);
      });
      // console.log(result);
      // res.end(result[0]);
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      var params = [req.body.text, req.body.userid, req.body.roomname ];
      models.messages.post( (results) => {
        console.log(results);
        res.json(results);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((results) => {
        // handle err
        res.json(results);
      });
    },

    post: function (req, res) {
      var params = [req.body.username];
      models.users.post( params, (results) => {
        res.json(results);
      });
    }
  }
};

