const { response } = require("express")

myresponse = {}


function make(sucess,message, data){ 

return response.json({'success':sucess,'message':message,
'data':data})

}




module.exports = {make,myresponse}
