app.directive('displayUsers', function() {
    return {
        restrict: 'E',
        scope: {
            display: '='
        },
        templateUrl: 'scripts/directives/displayUsers.html'
    };
});