
var application = angular.module('Testmodul', ['LogService', 'TestModulService']);

application.controller('TestModulCtrl', function($scope, log, testmodulFactory) {
    $scope.testdata = {
        name    :   'Value 1',
        desc    :   '2018-01-01T12:00:00',
        date    :   '2018-01-01T12:00:00',
    };
    
	// Calling the Log-Function
    log.debug('CookBookCtrl has been invoked');
	// Calling the Factory function to obtain the Json test data
	log.info(testmodulFactory.getData());
	
	// just testing the scope
    $scope.greetings = 'Willkommen';
    $scope.bye = 'Tschööö';

});