angular.module('payall.directive', [
    'payall.controller',
    'payall.template'
]).directive('payAll', function(){
    return {
        restrict: 'AE',
        templateUrl: 'payall',
        controller: 'PayAllCtrl',
        controllerAs: 'payall'
    }
});
