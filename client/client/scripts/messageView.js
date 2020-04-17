var MessageView = {


  initialize: function() {
  },

  renderMessage: function (message) {
    // $('#chats').append('<div class="chat"> </div>');
    // $('.chat').append(`<div class="username" username=${message.username}> ${message.username} <div class='accompmessage' id=${message.objectId}> </div> </div>`).append(`<div class='actualmessages'> ${message.text} </div>`);
    // console.log(message.username + ': ' + message.text);

    messageText = App.cleanText(message.text); // why is message.text undefined;
    userName = App.cleanText(message.username);

    $('#chats').append(`<div class="username ${message.roomname}" "username=${userName}> ${userName} <div class='actualmessages'> ${messageText} </div> </div>`);
  },

};
