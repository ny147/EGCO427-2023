const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const contactSchema = new Schema({
  cid: { type: String },
  name : {type :String},
  dose : {type :String},
  package : {type : Number},
  unit: { type: String },
  total : {type : Number},
  imageUrl : {type : String}

});



module.exports = mongoose.model("Drugs", contactSchema);
