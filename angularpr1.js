var app = angular
        .module("table" , [])
        .controller("TableController", function($scope){
    var employees=[
        { Name:"ben",Gender:"Male",Salary:52000,City:"london"},
         { Name:"david",Gender:"Male",Salary:72000,City:"Bangalore"},
         { Name:"maya",Gender:"female",Salary:42000,City:"london"},
         { Name:"jon",Gender:"Male",Salary:82000,City:"chennai"},
         { Name:"lara",Gender:"feMale",Salary:92000,City:"london"},
         ];
    $scope.employees= employees;
});