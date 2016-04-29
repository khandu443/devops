describe('Sample App', function () {
    var $controller, $scope, controller;
    beforeEach(module('sampleDemo'));
    
    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        $scope =  $rootScope.$new();
        controller = $controller('mainController', { $scope: $scope }); 
      }));


    describe('Testing main controller', function () {
        it('Should display hello world ', function () {
             
             expect($scope.message).toBe("Hello World");   
        });

    });
    
    /* describe('Testing main controller', function () {
        it('Should display hello world ', function () {
             
             expect($scope.message).not.toBe("Hello World");   
        });

    });
      */
});
