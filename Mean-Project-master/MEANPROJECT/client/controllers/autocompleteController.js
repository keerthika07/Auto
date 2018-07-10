mypro.controller('myController',function($scope,$http){
       $http({
         url:"/listpro",
         method:"GET"
       }).then(function(response){
       $scope.products = response.data;

     });
    
   });
