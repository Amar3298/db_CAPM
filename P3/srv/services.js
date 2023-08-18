const cds = require("@sap/cds")
const { BSEG } = cds.entities("FI")
let srv = new cds.Service
module.exports = srv =>{
    
    srv.on("READ","BSEGF", async (req,res)=>{
        const result = await SELECT.from(BSEG).bind(srv)
        console.log(result);
        return result
    })
}

