const mongoose = require("mongoose");

  const userSchema = mongoose.Schema({
        name : { type:String ,
                 required: true
        },
        email : { type : String ,
                  required : true ,
                  unique : true
        },
        password : { type:String ,
                     required: true
        },
        todos : [{
            type : mongoose.Schema.Types.ObjectId , 
            ref : "Todo"
        }]
    })

module.exports = mongoose.model("User", userSchema);