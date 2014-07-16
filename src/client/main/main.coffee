angular.module('payall', [
    'payall.directive'
    'payall.emails'
    'ui.router'
]).config (
    $urlRouterProvider
    $locationProvider
)->
    $locationProvider.html5Mode false # TODO hide behind flag.
    $urlRouterProvider.otherwise '/'
