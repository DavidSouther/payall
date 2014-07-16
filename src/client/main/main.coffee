angular.module('payall', [
    'payall.directive'
    'payall.emails'
    'ui.router'
    'payall.amount'
]).config (
    $urlRouterProvider
    $locationProvider
)->
    $locationProvider.html5Mode false # TODO hide behind flag.
    $urlRouterProvider.otherwise '/amount'
