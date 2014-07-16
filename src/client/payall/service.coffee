class PayAll
    constructor: ->
        @amount = 0
        @emails = []
        @emailsRaw = ""

    parseEmails: ->
        @emails = @emailsRaw.split(',').map (_)->_.trim()

angular.module('payall.service', [

]).service 'PayAllSvc', PayAll
