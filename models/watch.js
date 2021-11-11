const mongoose = require("mongoose") 
const watchSchema = mongoose.Schema({ 
 Brand: String, 
 color: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("watch", watchSchema) 