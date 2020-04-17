var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // messages.add(event);
    event.preventDefault();

    // post messages instead of console logging...
    // console.log();


    var username = App.username;
    var messageText = $('#message').val();

    Rooms.messageroomname = $('.roomdropdown option:selected').val();
    var message = {
      username: username,
      text: messageText,
      roomname: Rooms.messageroomname
    };

    Messages.send(message);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


