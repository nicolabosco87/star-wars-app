StarWarsApp.controller('mainController',function($scope, $location){

    //handle menu highlight
    $scope.getClass = function (path) {

        return ($location.path().substr(0, path.length) === path
        && ((path.length == 1 && ($location.path() == "/"))
         || path.length > 1) ) ? 'active' : '';
    }

});