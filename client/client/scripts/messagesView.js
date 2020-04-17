var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function(message) {


    $('#chats').html('');

    // use ajax to wait for messages to download ? and save
    $( document ).ready(function () {

      for (var i = 0; i < Messages.library.length; i++) {

        if (Messages.library[i].roomname === Rooms.messageroomname) {
          MessageView.renderMessage(Messages.library[i]);
        } else {
          // MessageView.renderMessage(Messages.library[i]);
        }
      }

    });

  },

  send: function () {

  },


  renderMessage: function (message) {

    Messages.library.push(message);
    $('#chats').append(`<div class="username ${message.roomname}" "username=${App.username}> ${App.username} <div class='actualmessages'> ${message.text} </div> </div>`);
    Friends.toggleStatus();

  },

  handleClick: function(even) {

  }

};