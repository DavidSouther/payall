routers = (app)->
    [
        'rewrite'
        'static'
    ].forEach (api)->
        require("./#{api}/route")(app)

    app

module.exports = routers
