const mongoose = require("mongoose") 
const watchSchema = mongoose.Schema({ 
 Brand: {type: String, minlength: 3}, 
 color: String, 
 cost: {type: Number, max: 500} 
}) 
 
module.exports = mongoose.model("watch", watchSchema) 