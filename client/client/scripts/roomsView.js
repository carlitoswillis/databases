var RoomsView = {

  $button: $('#rooms button'),

  $select: $('#rooms select'),

  initialize: function() {

    $('<input class=\'roomInput\' type=\'text\' />').appendTo('#rooms');
    this.$select.addClass('roomdropdown');

    $( document ).ready(this.render);

    this.$select.on('change', function () {
      Rooms.messageroomname = $('.roomdropdown option:selected').val();
      console.log('room switched!', Rooms.messageroomname);
      // MessageView.render();
      MessagesView.render();


    });
  },

  render: function(room) {

    // $('#chats').childre().css('display', 'none');
    // console.log('this does get activated');
    // $('.chat').html('');
    // .append('<div>hello this is resetting stuff </div>');
    // $(`${Rooms.messageroomname}`).css('display', 'block');
    // $(`.${room}`).css('display', 'block');
  },

  renderRoom: function (roomname) {
    // show messages from specific chat room only


    // MessageView.render();


    RoomsView.$select.append($('<option/>', {
      value: roomname,
      text: roomname
    }));

    this.messageroomname = roomname;

    MessagesView.render();

    RoomsView.$select.val(roomname);

  }


};

// var showRoom = function(room){
//
//   $(document).on('click', 'a.user', function () {
//     currentUsr = $(this).parent().attr('class')
//     showUsrTweets($(this).parent().attr('class'))
//  });
