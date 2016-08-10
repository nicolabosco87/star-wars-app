StarWarsApp.controller('planetsController',function($scope, swapi, $sce){

    swapi.getPlanets().then(function(d){
        $scope.planets = d;

        //set residents links
        for (key in $scope.planets.results) {

            var output = "<ul>";

            for (peopleKey in $scope.planets.results[key].residents) {
                var pieces = $scope.planets.results[key].residents[peopleKey].split('/');
                output+= '<li><a href="#/people/'+pieces[pieces.length - 2]+'" >Resident</a></li>';
            }

            output+= "</ul>";

            $scope.planets.results[key].residents = $sce.trustAsHtml(output);

        }

    });

});