var db = require('../db');

// dBconnection

// interacting with the database

module.exports = {

  messages: {

    get: function (callback) {
      var queryStr = 'SELECT messages.id, messages.text, messages.roomname, users.id from messages \
      left outer join users on (messages.id = users.id) \
      order by messages.id desc';
      db.query(queryStr, (err, results) => {
        callback(err, results);
      });
    }, // a function which produces all the messages

    post: function (params, callback) {


      // eslint-disable-next-line quotes
      var query = "INSERT INTO messages (text, userid, roomname) \
       values( ?,(select id from users where username = ? limit 1), ?)";
      db.query(query, params, function(err, results) {
        callback(err, results);
      });
    }

  }, // a function which can be used to insert a message into the database


  users: {

    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },

    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};