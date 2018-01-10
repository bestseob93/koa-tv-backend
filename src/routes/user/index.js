const Router = require('koa-router');

const router = new Router();
const userCtrl = require('./user.ctrl');

/*
    @param
    
*/
router.get('/isMe', userCtrl.checkUser);

/*
    @param
    
*/
router.get('/', userCtrl.getUser);

module.exports = router;