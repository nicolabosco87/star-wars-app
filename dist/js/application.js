StarWarsApp = angular.module('starwarsapp', ['ngRoute']);

StarWarsApp.config(['$controllerProvider', function($controllerProvider) {
    $controllerProvider.allowGlobals();
}]);



StarWarsApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/views/home.html"
            })
            .when('/planets', {
                templateUrl: "/views/planets.html"
            })
            .when('/people', {
                templateUrl: "/views/people.html"
            })
            .when('/people/:id', {
                templateUrl: "/views/people-detail.html"
            });
    });

