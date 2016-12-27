function GBUnityAPI(){
}

GBUnityAPI.prototype.init = function(options){
    this.host = options.host;
    this.port = options.port;
    this.appName = options.appName;
    this.privateKey = options.privateKey;

};

GBUnityAPI.prototype.validateUser = function(){

};
GBUnityAPI.prototype.getUserInfo = function(){

};
GBUnityAPI.prototype.getAddressBook = function(){

};
GBUnityAPI.prototype.getOrganizationsOfUser = function(){

};
GBUnityAPI.prototype.getContactersOfUser = function(){

};



module.exports = new GBUnityAPI