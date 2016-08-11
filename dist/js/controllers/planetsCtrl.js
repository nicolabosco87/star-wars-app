StarWarsApp.controller('planetsController',function($scope, swapi, $q, $sce){

    swapi.getPlanets().then(function(d){
        $scope.planets = d;


        var residentsPromises = [];
        for (key in $scope.planets.results) {

            for (peopleKey in $scope.planets.results[key].residents) {
                var pieces = $scope.planets.results[key].residents[peopleKey].split('/');
                var peopleId = pieces[pieces.length - 2];
                residentsPromises.push(swapi.getPeopleDetail(peopleId));
            }

            $scope.planets.results[key].residentsText = $sce.trustAsHtml("loading list...");
        }

        $q.all(residentsPromises).then(function(d){

            console.log(d);

            var index = 0;

            //set residents links
            for (key in $scope.planets.results) {

                var output = "<ul>";

                for (peopleKey in $scope.planets.results[key].residents) {
                    var pieces = $scope.planets.results[key].residents[peopleKey].split('/');
                    output+= '<li><a href="#/people/'+pieces[pieces.length - 2]+'" >'+ d[index].name+'</a></li>';
                    index++;
                }

                output+= "</ul>";

                $scope.planets.results[key].residentsText = $sce.trustAsHtml(output);

            }

        });



    });

});