// @author 啥都不会charles QQ: 752781621

const Query = require('../pool/index')

class User {

    static findAllUserData(ctx) {
        let _sql = `select * from users;`
        return Query(_sql)
    }

}

module.exports = User