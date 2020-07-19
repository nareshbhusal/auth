const getUser = require('./user/getUser');

getUser.prototype.cache = function() {
    this.toCache=true;
}
