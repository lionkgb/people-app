(function() {
  "use strict"

  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [
      {
        name: "Lionel",
        bio: "Student at kepler",
        bioVisible: false
      },
      {
        name: "Berry",
        bio: "Teacher at Kepler Kigali",
        bioVisible: false
      },
      {
        name: "Mark",
        bio: "Full stack developer",
        bioVisible: false
      },  
    ];

    $scope.addPerson = function(name, bio) {
      if (name && bio) {
        var person = {
          name: name, 
          bio: bio,
          bioVisible: false
        }
        $scope.people.push(person);
      }
    };

    $scope.completePeople = function(person) {
      var index = $scope.people.indexOf(person);
      $scope.people[index].completed = true;
    }

    window.$scope = $scope;
  });
})();