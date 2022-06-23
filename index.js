'use strict'

var Api = require('./lib/api')

module.exports = Leaf

function Leaf (host) {
    this._host = host
    this._api = new Api(host)
}

Leaf.prototype.authorization = function () {
    return this._api.authorization(this._host)
}