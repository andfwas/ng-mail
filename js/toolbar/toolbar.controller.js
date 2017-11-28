angular.module('ngInbox')
  .controller('toolbar', toolbar)
  function toolbar() {
    const vm = this

    vm.test = function(mail) {
      for (var i = 0; i < mail.length; i++) {
        mail[i].selected = true
      }
    }

    vm.unselectAll = function(mail) {
      for (var i = 0; i < mail.length; i++) {
        mail[i].selected = false
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

    vm.allLabels = [
      {
        id: 1,
        label: 'dev'
      },
      {
        id: 2,
        label: 'personal'
      },
      {
        id: 3,
        label: 'gschool'
      },
    ]

    vm.labelSelect = function(selected, mail) {
      console.log(typeof selected);
      console.log(selected);
      for (var i = 0; i < mail.length; i++) {
        console.log(mail[i]);
        if (mail[i].labels.indexOf(selected) === -1) {
          mail[i].labels.push(selected)
        }
      }
    }

  }
