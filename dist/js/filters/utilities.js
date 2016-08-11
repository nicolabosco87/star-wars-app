StarWarsApp.filter('contains', function() {
    return function (array, needle) {
        return array.indexOf(needle) >= 0;
    };
});

StarWarsApp.filter('notcontains', function() {
    return function (array, needle) {
        return array.indexOf(needle) < 0;
    };
});