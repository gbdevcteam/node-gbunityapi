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

var api = require('gbunityapi');
api.validateUser(sessionId,userId,fun(){})
其中fun()函数是一个返回Promise对象的函数，返回结果如下：

```
{ 
   "result": "success",  
   "failedMessage": "",  
   "validation": "valid" 
 }
```

api.getUserInfo (sessionId, userId, fun(){}))
其中fun()函数是一个返回Promise对象的函数，返回结果如下：

```
 { 
   "result": "success",  
   "failedMessage": "",  
   "personal":{  
     "id":"5837e952e0095f1320eae372", 
     "userName":"zhangbin199", 
     "name":"张滨", 
     "email":"zhangbin@sg.com", 
     "mobilePhone":"13763286281", 
     "phone":"(021)33674998-2130", 
     "shortPhone":"6338", 
     "gender":"男", 
     "sortNumber":10 
   }, 
   "authorities":[{ 
     "code":"5837e952e0wwfd5f1320eae372", 
     "name":"审批员", 
     "remark":"备注", 
     "sortNumber":3 
     },{ 
     "code":"5837ekude0wwfd5f1320eae372", 
     "name":"签到发起人", 
     "remark":"备注", 
     "sortNumber":2 
   }] 
 } 
```

api.getAddressBook  (fun(){}))
其中fun()函数是一个返回Promise对象的函数，返回结果如下：

```
 { 
   "result": "success",  
   "failedMessage": "",  
   "organizations":[{  
     "id":"5837e952e0095f1320eae372", 
     "name":"金桥信息", 
     "parentId ":"", 
     "sortNumber":1 
   },{ 
     "id":"5837e952e0095f13208dj398", 
     "name":"技术中心", 
     "parentId ":"5837e952e0095f1320eae372", 
     "sortNumber":1 
   }], 
   "users":[{ 
       "id":"5837e952e0095f1320eae338", 
       "userName":"zhangbin199", 
       "name":"张滨", 
       "email":"zhangbin@sg.com", 
       "mobilePhone":"13763286281", 
       "phone":"(021)33674998-2130", 
       "shortPhone":"6338", 
       "gender":"男", 
       "sortNumber":10, 
       "organizationId ":"5837e952e0095f13208dj398" 
   }] 
 }
 ```
 
 api.getOrganizationsOfUser (userId, sessionId, fun(){})
其中fun()函数是一个返回Promise对象的函数，返回结果如下：

```
 { 
   "result": "success",  
   "failedMessage": "",  
   "organizations":[{  
     "id":"5837e952e0095f1320eae372", 
     "name":"金桥信息", 
     "parentId ":"", 
     "sortNumber":1 
   },{ 
     "id":"5837e952e0095f13208dj398", 
     "name":"技术中心", 
     "parentId ":"5837e952e0095f1320eae372", 
     "sortNumber":1 
   }] 
 } 
 ```
 
  api.getContactersOfUser (userId, sessionId, orgnizationId, fun(){})
其中fun()函数是一个返回Promise对象的函数，返回结果如下：

```
 { 
   "result": "success",  
   "failedMessage": "",  
   "users":[{ 
       "id":"5837e952e0095f1320eae338", 
       "userName":"zhangbin199", 
       "name":"张滨", 
       "email":"zhangbin@sg.com", 
       "mobilePhone":"13763286281", 
       "phone":"(021)33674998-2130", 
       "shortPhone":"6338", 
       "gender":"男", 
       "sortNumber":10, 
       "organizationId ":"5837e952e0095f13208dj398" 
   }] 
 }
 ```
##License
gbunityapi  is licensed under the MIT.
