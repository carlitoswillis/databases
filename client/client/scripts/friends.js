var Friends = {

  friendsList: new Set (),

  initialize: function() {

    $(document).ready(function () {
      $('#chats').on('click', function (event) {

        if (event.target.classList.contains('username')) {
          var name = event.target['attributes'][1]['value'];
          Friends.toggleStatus(name);
          // Friends.friendsList.add(name);
          console.log('added ', event.target['attributes'][1]['value'], '!!!');
          console.log(Friends.friendsList);
        }
        // console.log(event);

      });
    });


  },

  isFriend: function(name) {
    return Friends.friendsList.has(name);
  },

  toggleStatus: function (name, callback = ()=>{}) {

    if (Friends.friendsList.has(name)) {
      Friends.friendsList.delete(name);
      callback(false);
    } else {
      Friends.friendsList.add(name);
      callback(true);
    }

  }


};