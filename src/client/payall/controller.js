function PayAllCtrl(service, $http){
    this.service = service;
    this.$http = $http;
}

PayAllCtrl.prototype.askMoney = function(){
    this.service.parseEmails();
    this.$http.post('/request', {
        amount: this.service.amount,
        emails: this.service.emails
    });
};

PayAllCtrl.$inject = [
    'PayAllSvc',
    '$http'
];

angular.module('payall.controller', [
    'payall.service'
]).controller('PayAllCtrl', PayAllCtrl);
