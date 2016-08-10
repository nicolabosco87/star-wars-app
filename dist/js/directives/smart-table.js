StarWarsApp.directive('smartTable', function(){

    return {
        restrict: 'E',
        scope: {data: '='},
        templateUrl: '/views/smart-table.html',
        link: function(scope, element, attrs) {

            scope.data =  scope.$eval('$parent.' + attrs.data);

            scope.fields = attrs.fields.split(' ');

            if (attrs.htmlfields != undefined) {
                scope.htmlfields = attrs.htmlfields.split(' ');
            } else {
                scope.htmlfields = [];
            }

        },
    }
});
