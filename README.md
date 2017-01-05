# gbunityapi



##目标
五个验证和获取通讯录信息的node.js方法。分别为验证用户合法性、获取用户信息、获取通讯录信息、获取用户可见的通讯录组织信息、获取用户可见的通讯录用户信息。



##安装
Via npm.
```
npm install gbunityapi
```



##api列表
* validateUser(sessionId, userId, callback)
* getUserInfo (sessionId, userId, callback)
* getAddressBook (callback)
* getOrganizationsOfUser (userId, sessionId, callback)
* getContactersOfUser (userId, sessionId, orgnizationId, callback)



##API
###validateUser(sessionId, userId, callback)
###getUserInfo (sessionId, userId, callback)
###getAddressBook (callback)
###getOrganizationsOfUser (userId, sessionId, callback)
###getContactersOfUser (userId, sessionId, orgnizationId, callback)
* sessionId: 会话id
* userId: 用户id
* orgnizationId:组织id
* callback: 回调函数

验证用户合法性
```
GBUnityAPI.prototype.validateUser = function (sessionId, userId, callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitysecret.parseHmacSha1Secret(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/user/validation' + '?appName=' + this.appName + '&userId='
        + userId + '&sessionId=' + sessionId + '&timeStamp=' + timestamp + '&token=' + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};
```
获取用户信息
```
GBUnityAPI.prototype.getUserInfo = function (sessionId, userId, callback) {
    var timestamp = getTimeStamp();
    var publicKey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitysecret.parseHmacSha1Secret(publicKey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/user' + '?appName=' + this.appName + '&userId=' + userId
        + '&sessionId=' + sessionId + '&timeStamp=' + timestamp + '&token=' + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};
```
获取通讯录信息
```
GBUnityAPI.prototype.getAddressBook = function (callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitysecret.parseHmacSha1Secret(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/addressBook' + '?appName=' + this.appName + '&timeStamp='
        + timestamp + "&token=" + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};
```
获取用户可见的通讯录组织信息
```
GBUnityAPI.prototype.getOrganizationsOfUser = function (userId, sessionId, callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitysecret.parseHmacSha1Secret(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/orgnizationsOfUser' + '?appName=' + this.appName
        + '&userId=' + userId + "&sessionId=" + sessionId + '&timeStamp=' + timestamp + "&token=" + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};
```
获取用户可见的通讯录用户信息
```
GBUnityAPI.prototype.getContactersOfUser = function (userId, sessionId, orgnizationId, callback) {
    var timestamp = getTimeStamp();
    var publickey = this.appName + timestamp;
    var privateKey = this.privateKey;
    var token = gbunitysecret.parseHmacSha1Secret(publickey, privateKey);
    var url = this.host + ':' + this.port + '/api/contact/contactorsOfUser' + '?appName=' + this.appName
        + '&userId=' + userId + '&sessionId=' + sessionId + '&orgnizationId=' + orgnizationId + '&timeStamp='
        + timestamp + '&token=' + token;
    var options = {url: url, json: true, method: "GET"};
    return requestCommon(options, callback);
};
```

##License
gbunitysecret  is licensed under the MIT.
