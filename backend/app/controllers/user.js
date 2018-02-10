var connection = require('../../config/db');

function Todo(){

    //get function
    this.getAll = function(req, res, next){
        connection.acquire(function(err,con){
            if(err) throw err;
            con.query('select *from t_mahasiswa', function(err,data){
                con.release();
                if(err)
                    return res.json({status:'400', messsage:'Failed', result:[]});
                return res.json({status:'200', messsage:'success', result:data})
            });
        });
    };

    this.getById = function(req, res){
        connection.acquire(function(err,con){
            if(err) throw err;
            con.query('select * from t_mahasiswa where id=?', [req.params.id], function(err,data){
                con.release();
                if(err)
                    return res.json({status:'400', messsage:'Failed', result:[]});
                return res.json({status:'200', messsage:'success', result:data})
                console.log(req);
            });
        });
    };

    //post function
    this.create = function(req, res) {
        connection.acquire(function(err, con) {
          con.query('insert into t_mahasiswa set ?', req.body, function(err, result) {
            con.release();
            if (err) {
              res.send({status: 400, message: 'User creation failed'});
            } else {
              res.send({status: 200, message: 'User created successfully'});
            }
          });
        });
    };

    //put function
    this.update = function(req, res) {
        connection.acquire(function(err, con) {
          con.query('update t_mahasiswa set ? where id = ?', [req.body, req.body.id], function(err, result) {
            con.release();
            if (err) {
              res.send({status: 400, message: 'User update failed'});
            } else {
              res.send({status: 200, message: 'User updated successfully'});
            }
          });
        });
    };

    //destroy function
    this.delete = function(req, res) {
        connection.acquire(function(err, con) {
          con.query('delete from t_mahasiswa where id = ?', [req.params.id], function(err, result) {
            con.release();
            if (err) {
              res.send({status: 400, message: 'Failed to delete'});
            } else {
              res.send({status: 200, message: 'Deleted successfully'});
            }
          });
        });
    };

}

module.exports = new Todo();