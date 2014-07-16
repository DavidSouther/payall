angular.module('payall.emails', ['ui.router',
    'payall.emails.controller', 'payall.emails.template']).config(function($stateProvider) {
    return $stateProvider.state({
        name: 'emails',
        controller: 'PayAllEmailsCtrl',
        controllerAs: 'emails',
        templateUrl: 'payall/emails'
    });
});