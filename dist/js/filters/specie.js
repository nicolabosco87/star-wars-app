StarWarsApp.filter('specie',function(swapi){
    return function(text) {

        if (Array.isArray(text)) {
            var output = "";

            var promise = swapi.doCustomCall(text[0]).then(function (species) {
                output += species.name;

                return output;

            });

            return promise;

        } else {
            return text;
        }

        //console.log(swapi.doCustomCall(text));


    }
});