angular.module('ngInbox')
  .controller('toolbar', toolbar)

  function toolbar($http) {
    const vm = this
    const url = 'http://localhost:8082/api/messages'
    // heroku db
    // https://andfwas-ng-mail-db.herokuapp.com/api/messages

    vm.selectOne = function(mail) {
      for (var i = 0; i < mail.length; i++) {
        mail[i].selected = true
      }
    }
    vm.selectAll = function(mail) {
      var count = 0
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].selected == true) {
          count++
        }
      }
      return count
    }
    vm.unselectAll = function(mail) {
      for (var i = 0; i < mail.length; i++) {
        mail[i].selected = false
      }
    }
    vm.allLabels = [
      { id: 1,
        label: 'dev' },
      { id: 2,
        label: 'personal' },
      { id: 3,
        label: 'gschool' }]
    vm.addLabel = function(selected, mail) {
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].labels.indexOf(selected) === -1 && mail[i].selected == true) {

          mail[i].labels.push(selected)
          mail[i].labels.sort()
        }
        $http.patch(url, {
          "messageIds": [i],
          "command": "addLabel",
          "label": selected
        })
      }
    }
    vm.removeLabel = function(selected, mail) {
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].labels.indexOf(selected) >= 0 && mail[i].selected == true) {
          mail[i].labels.splice(mail[i].labels.indexOf(selected), 1)
        }
        $http.patch(url, {
          "messageIds": [i],
          "command": "removeLabel",
          "label": selected
        })
      }
    }
    vm.markAsRead = function(message) {
      for (var i = 0; i < message.length; i++) {
        let select = message[i].selected
        let data = {
          "messageIds": [message[i].id],
          "command": "read",
          "read": true
        }
        if (select) {
          // console.log(message[i]);
          $http.patch(url, data)
          .then(() => {
            $http.get(url)
            .then((result) => {
              vm.message = result.data._embedded.messages
              console.log(vm.message);
              // console.log(typeof i);
            })
          })
        }
      }
    }
    // ["0"].id
    vm.markAsUnread = function(message) {
      for (var i = 0; i < message.length; i++) {
        let select = message[i].selected
        let data = {
          "messageIds": [message[i].id],
          "command": "read",
          "read": false
        }
        if (select) {
          // console.log(message[i]);
          $http.patch(url, data)
          .then(() => {
            $http.get(url)
            .then((result) => {
              vm.message = result.data._embedded.messages
              console.log(vm.message);
              // console.log(typeof i);
            })
          })
        }
      }
    }
  }
