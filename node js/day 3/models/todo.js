const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
        title : { type:String ,
                 required: true
        },
        description : { type : String ,
        },
        complete : { type:Boolean ,
                     default: false
        },
    })

module.exports = mongoose.model("Todo", todoSchema);
