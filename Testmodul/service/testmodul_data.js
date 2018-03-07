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

        },
        getDataByName: function(name){
            
        }
    }
});