
    var app = angular.module('store',[]);
    
    app.controller('PhoneListCtrl', function($scope,$http){   
        $http.get('phones.json').success(function(data){
           $scope.phones=data;                                          
        });
    
        $scope.orderProp='age';
    }]);
 