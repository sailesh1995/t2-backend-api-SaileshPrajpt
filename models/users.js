var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  // username: {
  //     type:String,
  //     required: true,
  //     unique: true
  // },
  // password: {
  //     type: String,
  //     required: true
  // },
  admin: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(passportLocalMongoose);
var Users=mongoose.model('User',userSchema);
module.exports = Users;
