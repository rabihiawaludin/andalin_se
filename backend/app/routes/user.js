var user = require('../controllers/user');

module.exports = {

    configure: function(app){
        app.route('/user/:id').get(user.getById);
        app.route('/user/').get(user.getAll);
        app.route('/user').put(user.update);
        app.route('/user').patch(user.update);
        app.route('/user').post(user.create);
        app.route('/user/:id').delete(user.delete);
    }

};