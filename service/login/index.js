/**
 * @fileOverview login service
 * @name index.js
 * @author Shun Kokubo <shnkkb@gmail.com>
 */
var users = require('../../lib/db/mongoClient').collection('users');


function LoginService() {

}

module.exports = new LoginService();

LoginService.prototype.checkUser = function(params) {
    var userName = params.userName;
    var password = params.password;

    users.find({name: userName, password: password}).toArray(function(err, array) {
        var result = {
            success: false,
            message: '',
            user: {}
        };
        if(err) {
            result.message = 'occur error';
            return params.callback(err, result);
        }
        if(!array.length) {
            result.message = 'Incorrect username or password.'
            return params.callback(err, result);
        }
        result.success = true;
        result.message = 'success';
        params.callback(err, result);
    });
}

