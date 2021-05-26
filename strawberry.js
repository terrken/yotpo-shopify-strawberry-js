var strawberryapp = angular.module('strawberry', ['ngSanitize']).config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

strawberryapp.controller('main', function($templateRequest, $sce, $compile, $scope, $http, $location){
  var strawberryRender=function(e,t,a,c){$scope.data=[],$templateRequest($sce.getTrustedResourceUrl(t)).then(function(t){void 0!==c&&angular.forEach(c,function(e,t){$scope.data[t]=e}),$compile($("#"+e).append(t))($scope)})};
  var yotpoApi = "https://api.yotpo.com/v1/widget/{{ YOUR_YOTPO_APP_KEY }}/products/"+shopifyProductID+"/reviews.json";
  $http.get(yotpoApi).then(function(response){
    if( response.status == 200){strawberryRender("main-yotpo-widget", "yotpo-widget.htm", "yotpo", response.data.response);}
  });
});
