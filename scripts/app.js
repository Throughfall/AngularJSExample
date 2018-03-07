var application = angular.module('application', ['ngRoute', 'Testmodul', 'LogService']);

application.config(function($routeProvider) {
            $routeProvider
            .when('/test', {
                templateUrl: 'Testmodul/view/testmodul_details.html',
                controller: 'TestModulCtrl'
            })
        });