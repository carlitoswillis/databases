// var db = require('./db');


var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {

    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    Messages.initialize();
    MessagesView.initialize();
    MessageView.initialize();
    Rooms.initialize();

    $(document).ready(function () {
      Friends.initialize();
    });

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },


  cleanText: function(input) {
    if ( typeof input === 'string') {
      // let lt = /</g;
      // let gt = />/g;
      // let ap = /'/g;
      // let ic = /"/g;
      // input = input.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
      return input;
    } else {

      console.log(here);
      return input;
    }
  }

};
