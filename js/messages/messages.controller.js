angular.module('ngInbox')
  .controller('messages', messages)

  function messages($http) {
    const vm = this
    const url = 'https://andfwas-ng-mail-db.herokuapp.com/api/messages'

    $http.get(url)
    .then((result) => {
      vm.messages = result.data._embedded.messages
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
          vm.messages = result.data._embedded.messages
        })
      })
    }
  }
