angular.module('app', ['ui.router'])
    // descr de TestCtrl
    .controller('TestCtrl', function($scope) {
        $scope.p = { yourName: "Angel Sullon" };
        $scope.saludo = function() {
            console.log("Hola " + $scope.p.yourName);
        };
    });


angular.module('app')

.config(function($stateProvider) {
    $stateProvider.state({
        name: 'test',
        url: '/test',
        templateUrl: 'ui_web/test/views/test.html'
    });
});
