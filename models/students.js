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
        date: {
            type: "string", 
            required: true
        },
        amountMonth: {
            type: "string", 
            required: false
        },
        cource: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Courses'
        },
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Groups'
        },
        facultet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Facultet'
        },
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rooms'
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Students', Students)