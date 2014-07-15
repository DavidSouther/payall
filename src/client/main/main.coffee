angular.module('payall', [
    'payall.directive'
    'ui.router'
]).config (
    $urlRouterProvider
    $locationProvider
)->
    $locationProvider.html5Mode true # TODO hide behind flag.
    $urlRouterProvider.otherwise '/'
