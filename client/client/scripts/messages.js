// Messages

//  Display messages retrieved from the parse server.
//    Read about Underscore's easy templating abilities  , then create a template function to render a message to HTML.
//    Alternatively, you may use jQuery to construct DOM nodes and compose them together to create the desired HTML output.
//    Be sure to use proper escaping on any user input. Since you're displaying input that other users have typed, your app is vulnerable XSS attacks

//  Allow users to save new chat messages to the server

//  Setup a way to refresh the displayed messages (either automatically or with a button)


// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// var message2 = {
//   objectId: "WG171AqLq2",
//   username: "anonymous",
//   roomname: "room",
//   text: ":)",
//   createdAt: "2020-04-04T02:50:20.466Z",
//   updatedAt: "2020-04-04T02:50:20.466Z"
// };

// var db = require('./db');

var Messages = {

  library: [],
  // libary: get database lol,

  initialize: function () {

    $( document ).ready(App.fetch(function (data) {
      data = data.results;
      for (var message of data) {
        if (message.username !== undefined && message !== undefined) {
          Messages.library.push(message);
        }
      }
      MessagesView.render();
    }));

  },

  send: function (message) {
    Parse.create(message);
  }

};



