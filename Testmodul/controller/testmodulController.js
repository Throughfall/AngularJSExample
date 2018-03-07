
var application = angular.module('Testmodul', []);

application.controller('TestModulCtrl', function($scope) {
    $scope.testdata = {
        name    :   'Value 1',
        desc    :   '2018-01-01T12:00:00',
        date    :   '2018-01-01T12:00:00',
    };
    
    $scope.greetings = 'Willkommen';
    $scope.bye = 'Tschööö';

});