var request = require('request');
var gbunitytoken = require('gbunitytoken');
var Promise = require('bluebird');
var moment = require('moment');

function GBUnityAPI(){
}

var getTimeStamp = function(){
    return moment.format("YYYYMMDDHHmmssSSS")
};

var requestCommon = function(options,callback){
    return new Promise(function(resolve,reject){
        return request(options, function (error, response, body) {
            var hasCallback = 'function' === typeof callback
            if(error) {
                if(hasCallback)  return callback(error);
                return reject(error);
            }
            if (!error && response.statusCode == 200) {
                if(hasCallback) return callback(null,body);
                return resolve(body)
            }
        })
    })
}

GBUnityAPI.prototype.init = function(options){
    this.host = options.host;
    this.port = options.port;
    this.appName = options.appName;
    this.privateKey = options.privateKey;

};

GBUnityAPI.prototype.validateUser = function(sessionId,userId,callback){
        var timestamp = getTimeStamp();
        var publickey = this.appName + timestamp;
        var privateKey =  this.privateKey
        var token = gbunitytoken(publickey,privateKey);
        var url =  this.host+'/api/contact/user/validation'+'?appName='+this.appName+'&userId='+userId+'&sessionId='+sessionId+'&timeStamp='+timestamp+'&token='+token;
        var options = {url:url,json:true,method:"GET"};
        return requestCommon(options,callback);
    })
};
GBUnityAPI.prototype.getUserInfo = function(){

};
GBUnityAPI.prototype.getAddressBook = function(){
        var timestamp = getTimeStamp();
        var publickey = this.appName + timestamp;
        var privateKey = this.privateKey;
        var token = gbunitytoken(publickey,privateKey);
        var url = this.host+'/api/contact/infomation'+'?appName='+this.appName+'&timeStamp='+timestamp+"&token="+token;
        var options = {url:url,json:true,method:"GET"};
        return requestCommon(options,callback);
};
GBUnityAPI.prototype.getOrganizationsOfUser = function(){

};
GBUnityAPI.prototype.getContactersOfUser = function(){

};



module.exports = new GBUnityAPI

