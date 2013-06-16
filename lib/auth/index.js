/**
 * @fileOverview auth
 * @name index.js
 * @author Shun Kokubo <shnkkb@gmail.com>
 */


function Auth() {

}

module.exports = new Auth();

Auth.prototype.ensureAuthentication = function(req, res, next) {
    if(req.path === '/login' || req.session.user) return next();
    res.redirect('/login');
}