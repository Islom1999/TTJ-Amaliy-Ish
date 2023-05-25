const mongoose = require('mongoose')

const Students = new mongoose.Schema(
    {
        fullname: {
            type: "string", 
            required: true, 
            trim:true
        },
        image: {
            type: "string", 
            required: false, 
            trim:false, 
        },
        cource: {
            type: "string", 
            required: true, 
            trim:true
        },
        group: {
            type: "string", 
            required: true
        },
        room: {
            type: "string", 
            required: true
        },
        date: {
            type: "string", 
            required: true
        },
        amountMonth: {
            type: "string", 
            required: false
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Students', Students)