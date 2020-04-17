var models = require('../models');
// models.messages
// models.users

module.exports = {

  messages: {

    get: function (req, res) {

      models.messages.get((err, results) => {
        if (err) { /* do something */ }
        // handle err
        res.json(results);
      });
      // console.log(result);
      // res.end(result[0]);
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      var params = [ req.body.text, req.body.username, req.body.roomname ];
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log('error at line 24');
          res.end();
        }
        // console.log(params);
        res.json(results);

      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        // handle err
        res.json(results);
      });
    },

    post: function (req, res) {
      var params = [req.body.username];
      models.users.post( params, (err, results) => {
        res.sendStatus(201);
        // res.json(results);
      });
    }
  }
};

