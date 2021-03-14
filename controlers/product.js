var connection = require('./../config');

module.exports.add=function(req,res){
    var today = new Date();
    var file = req.files.p_image;

    var users={
        "p_title":req.body.p_title,
        "p_details":req.body.p_details,
        "p_price":req.body.p_price,
        "p_image":file.name,
        "p_time":today
    }
    connection.query('INSERT INTO product SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          file.mv('./uploads/'+file.name, function(err){
              if(err){
                  res.json(err);
              } else {
                res.json({
                    status:true,
                    data:results,
                    message:'product added sucessfully'
                })
              }
          });
          
      };
    });
}
