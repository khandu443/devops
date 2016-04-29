(function(){
    angular
    .module('sampleDemo',['ngRoute','ngMaterial','ngAnimate'])
    .config(function($mdThemingProvider,$routeProvider){
        $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
        
        
         $routeProvider
            .when('/',{

                templateUrl: 'components/home.html',
                controller: 'mainController'
            })
            .otherwise({
                redirectTo: '/'
            });
            
        });
    
})();