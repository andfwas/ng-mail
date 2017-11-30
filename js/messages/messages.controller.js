angular.module('ngInbox')
  .controller('messages', messages)

  function messages($http) {
    const vm = this
    const url = 'http://localhost:8082/api/messages'

<<<<<<< HEAD

    vm.messages = [{
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "selected": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "selected": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "selected": false,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "selected": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "selected": false,
        "labels": []
=======
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
>>>>>>> test
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
