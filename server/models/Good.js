const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    name:{type:String},
    describe:{type:String},
    price:{type:Number},
    icon:[{type:Object}],
    weight:{type:Number},
    collect:{type:Number,min:0,default:0},
    shop:{type:mongoose.SchemaTypes.ObjectId,ref:'Shop'},
    rule:[{
        rulename:{type:mongoose.SchemaTypes.ObjectId,ref:"Rule"},
        rules:{type:String},
        mount:{type:String}
    }]
})

module.exports = mongoose.model('Good',scheme)