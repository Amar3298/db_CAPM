const mysrvdemo = function(srv){
    srv.on("myfoobar",function(req,res){
        return "This is the Starting Point of the API using function";
    });
};

const msgpass = function(srv){
    srv.on("mymsg",function(req,res){
        return "My name is:- "+ req.data.msg;
    });
};

module.exports = mysrvdemo;