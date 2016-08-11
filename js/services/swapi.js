StarWarsApp.factory('swapi',function($http, $q){

    var planetsUrl = "http://swapi.co/api/planets/";
    var peopleUrl = "http://swapi.co/api/people/";
    var speciesUrl = "http://swapi.co/api/species/";

    var deferred = $q.defer();

    return {

        getPlanets: function(){

            var promise = $http.get(planetsUrl)
                .then(function(response) {
                    return response.data;
                });

            return promise;

        },

        getPeople: function() {

            var promise = $http.get(peopleUrl)
                .then(function(response) {
                    return response.data;
                });

            return promise;

        },

        getPeopleDetail: function(id) {

            var promise = $http.get(peopleUrl + id + '/')
                .then(function(response) {
                    return response.data;
                });

            return promise;

        },

        getSpecie: function() {
            var promise = $http.get(speciesUrl)
                .then(function(response) {
                    return response.data;
                });

            return promise;
        },

        doCustomCall: function(url) {

            var promise = $http.get(url)
                .then(function(response) {
                    return response.data;
                });

            return promise;

        }

    }



});
