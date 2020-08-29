const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
      name:{
          type:String,
          require:true
      },
      address:{
          type:String
      },
      email:{
          type:String
      }

})

mongoose.model("Student",studentSchema);