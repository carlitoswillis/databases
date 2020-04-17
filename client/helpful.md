To get you started, here's an example POST request. Note that any messages you POST to the server are viewable by everyone, so be nice.

$.ajax({
  This is the url you should use to communicate with the parse API server.
  url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});


