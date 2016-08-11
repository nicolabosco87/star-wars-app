StarWarsApp.controller('peopleController',function($scope, swapi, $q, $routeParams){


    //$scope.item = Item.get({id: $routeParams.id});

    //console.log($routeParams);

    $scope.peopleDetailId = $routeParams.id;

    if ($scope.peopleDetailId == undefined) {

        $scope.title = "People";

        swapi.getPeople().then(function(d){
            $scope.people = d;
            getSpeciesInfo();

        });
    } else {

        $scope.title = "a";

        swapi.getPeopleDetail($scope.peopleDetailId).then(function(d){
            $scope.people_detail = d;
            $scope.title = d.name;
        });
    }


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
            for (key in species) {
                $scope.people.results[key].species = species[key].name;
            }
        });

    }

});