var app = angular.module('TestModulService',[]);
app.service('testmodulService', function() {
    this.hello = function() {
        return "Hello World";
    };
});

app.factory('testmodulFactory', function() {
    // Public API
    return {
        hello: function() {
            return "Hello World";
        },
        getData: function(){
			
			var obj = {content:null};

            $http({
                method : "GET",
                url : "templates/jsondata.json"
            }).then(function mySuccess(response) {
                obj = response.data;
            }, function myError(response) {
                obj = response.statusText;
            });

            return obj; 
        },
        getDataByName: function(name){
            
        }
    }
});