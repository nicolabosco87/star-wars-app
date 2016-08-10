StarWarsApp.controller('peopleController',function($scope, swapi, $q){

    swapi.getPeople().then(function(d){

        $scope.people = d;

        getSpeciesInfo();

    });


    function getSpeciesInfo() {

        var promises = [];

        for (key in $scope.people.results) {

            var obj;
            if (Array.isArray($scope.people.results[key].species)) {
                obj = $scope.people.results[key].species[0];
            } else {
                obj = $scope.people.results[key].species;
            }

            promises.push(swapi.doCustomCall(obj));
        }

        $q.all(promises).then(function(species){

            console.log("ALL");
            console.log(species);

            for (key in species) {
                $scope.people.results[key].species = species[key].name;
            }
        });

    }

});