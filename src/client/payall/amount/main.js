angular.module('payall.amount', ['ui.router', 'payall.amount.controller', 'payall.amount.template'])
.config(function($stateProvider) {
    $stateProvider.state({
        name: 'amount',
        controller: 'PayAllAmountCtrl',
        templateUrl: 'payall/amount'
    })
});
