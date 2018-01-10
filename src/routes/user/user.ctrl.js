const User = require('../../db/models/User');

/*
    @param
    
*/
exports.checkUser = async (ctx) => {
    const { user } = ctx.request;

    console.log('ctx');
    try {
        const userData = await User.findById(user._id).exec();
        if(!userData) {
            ctx.status = 403;
            return;
        }
        ctx.body = userData.username;
    } catch (e) {
        ctx.throw(e, 500);
    }
};

/*
    @param
    
*/
exports.getUser = (ctx) => {
    console.log(ctx.request);
    console.log('hello');
    ctx.body = {
        hello: 'world'
    }
};