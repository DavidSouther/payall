angular.module('payall.emails', [
    'ui.router',
    'payall.controller',
    'payall.emails.template'
]).config(function($stateProvider) {
    return $stateProvider.state({
        name: 'emails',
        url: '/emails',
        controller: 'PayAllCtrl',
        controllerAs: 'payall',
        templateUrl: 'payall/emails'
    });
});
