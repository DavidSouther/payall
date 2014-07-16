angular.module('payall.amount', [
    'ui.router',
    'payall.controller',
    'payall.amount.template'
]).config(function($stateProvider) {
    return $stateProvider.state({
        name: 'amount',
        url: '/amount',
        controller: 'PayAllCtrl',
        controllerAs: 'payall',
        templateUrl: 'payall/amount'
    });
});
