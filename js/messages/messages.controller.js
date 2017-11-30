angular.module('ngInbox')
  .controller('messages', messages)

  function messages($http) {
    const vm = this
    const url = 'http://localhost:8082/api/messages'
    // heroku db
    // https://andfwas-ng-mail-db.herokuapp.com/api/messages

    $http.get(url)
    .then((data) => {
      vm.messages = data.data._embedded.messages
    })

    vm.star = function(message) {
      let bool = message.starred
      if (bool) {
        bool = false
      } else {
        bool = true
      }
      let data = {
        "messageIds": [message.id],
        "command": "star",
        "star": bool
      }
      $http.patch(url, data)
      .then(() => {
        $http.get(url)
        .then((result) => {
          vm.messages = result.data['_embedded'].messages
        })
      })
    }

    // vm.markAsRead = function(message) {
    //   let data = {
    //     "messageIds": [message.id],
    //     "command": "read",
    //     "read": true
    //   }
    //   $http.patch(url, data)
    //     .then( () => {
    //     })
    //   $http.get(url)
    //   .then((data) => {
    //     $http.get(url)
    //     .then((result) => {
    //       vm.messages = data.data['_embedded'].messages
    //     })
    //   })
    // }
  }
