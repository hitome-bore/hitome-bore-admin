/**
 * @fileOverview login(login page) service
 * @name index.js
 * @author Shun Kokubo <shnkkb@gmail.com>
 */

var config = require('../../config');
var loginService = require('../../service/login');

//Constructor
function Login() {

};

module.exports = new Login();


/**
 * get login page
 * @param {Request}  req
 * @param {Response}  res
 */
Login.prototype.get = function(req, res) {
    var errMsg = req.flash('errMsg') || [];
    var userName = req.flash('userName') || '';
    res.render('login', {title: 'login', userName: userName, errMsg: errMsg});
}

/**
 * post login data
 * @param {Request}  req
 * @param {Response}  res
 */
Login.prototype.post = function(req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    var params = {
        userName: userName,
        password: password,
        callback: function(err, result){
            if(result.success) {
                req.session.user = {name: userName};
                return res.redirect('/');
            }
            req.flash('errMsg', result.message);
            req.flash('userName', userName);
            res.redirect('/login');
        }
    };

    loginService.checkUser(params);
}
