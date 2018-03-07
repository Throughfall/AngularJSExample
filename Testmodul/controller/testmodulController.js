
var application = angular.module('Testmodul', ['LogService']);

application.controller('TestModulCtrl', function($scope, log) {
    $scope.testdata = {
        name    :   'Value 1',
        desc    :   '2018-01-01T12:00:00',
        date    :   '2018-01-01T12:00:00',
    };
    
	// Calling the Log-Function
    log.debug('CookBookCtrl has been invoked');
    $scope.greetings = 'Willkommen';
    $scope.bye = 'Tschööö';

});