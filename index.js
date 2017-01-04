var request = require('request');
var gbunitytoken = require('gbunitytoken');
var Promise = require('bluebird');
var moment = require('moment');

function GBUnityAPI() {
}

var getTimeStamp = function () {
    return moment.format("YYYYMMDDHHmmssSSS");
};

var requestCommon = function (options, callback) {
    return new Promise(function (resolve, reject) {
        return request(options, function (error, response, body) {
            var hasCallback = 'function' === typeof callback
            if (error) {
                if (hasCallback)  return callback(error);
                return reject(error);
            }
            if (!error && response.statusCode == 200) {
                if (hasCallback) return callback(null, body);
                return resolve(body);
            }
        });
    });
};

GBUnityAPI.prototype.init = function (options) {
    this.host = options.host;
    this.port = options.port;
    this.appName = options.appName;
    this.privateKey = options.privateKey;

};

GBUnityAPI.prototype.validateUser = function (sessionId, userId, callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitytoken.parseHmacSha1Token(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/user/validation' + '?appName=' + this.appName + '&userId='
        + userId + '&sessionId=' + sessionId + '&timeStamp=' + timestamp + '&token=' + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};

GBUnityAPI.prototype.getUserInfo = function (sessionId, userId, callback) {
    var timestamp = getTimeStamp();
    var publicKey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitytoken.parseHmacSha1Token(publicKey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/user' + '?appName=' + this.appName + '&userId=' + userId
        + '&sessionId=' + sessionId + '&timeStamp=' + timestamp + '&token=' + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};

GBUnityAPI.prototype.getAddressBook = function (callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitytoken.parseHmacSha1Token(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/addressBook' + '?appName=' + this.appName + '&timeStamp='
        + timestamp + "&token=" + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};

GBUnityAPI.prototype.getOrganizationsOfUser = function (userId, sessionId, callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitytoken.parseHmacSha1Token(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/orgnizationsOfUser' + '?appName=' + this.appName
        + '&userId=' + userId + "&sessionId=" + sessionId + '&timeStamp=' + timestamp + "&token=" + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};
GBUnityAPI.prototype.getContactersOfUser = function (userId, sessionId, orgnizationId, callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitytoken.parseHmacSha1Token(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/contactorsOfUser' + '?appName=' + this.appName
        + '&userId=' + userId + '&sessionId=' + sessionId + '&orgnizationId=' + orgnizationId + '&timeStamp='
        + timestamp + '&token=' + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};



module.exports = new GBUnityAPI;

