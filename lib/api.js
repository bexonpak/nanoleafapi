'use strict'

module.exports = Api

function Api (host) {
    this._host = host
}

Api.prototype.authorization = function (host) {
    console.log('authorization', host);
}