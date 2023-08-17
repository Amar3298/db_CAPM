// const mysrvdemo = function(srv){
//     srv.on("myfoobar",function(req,res){
//         return "Dragon Ball";
//     })
// }

// module.exports = mysrvdemo;

const mysrvdemo = function(srv){
    srv.on("myfoobar",function(req,res){
        return "DB";
    });
};

module.exports = mysrvdemo