
const Student = require('../models/students')
const Course = require('../models/course')
const Facultets = require('../models/facultet')
const Groups = require('../models/groups')
const Rooms = require('../models/rooms')
const Stages = require('../models/stage')

// Setting Pages and Events
const getHome = async(req, res) => {
    try {
        const student = await Student.find().lean()
            .populate('cource')
            .populate("group")
            .populate("facultet")
            .populate("room")

        const courses = await Course.find().lean()
        const facultets = await Facultets.find().lean()
        const groups = await Groups.find().lean()
        const rooms = await Rooms.find().lean()
        const stages = await Stages.find().lean()

        res.render('home', {
            student,
            title: 'Talabalar sahifasi',
            data: {courses, groups, rooms, stages, facultets}
        })
    } catch (error) {
        console.log(error)
    }
}

const createStudent = async(req, res) => {
    try {
        let image 
        if(req.file){
            image = "/upload/img/" + req.file.filename
        }else{
            image = '/images/faces/face1.jpg'
        }
        
        await Student.create({... req.body, image})

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}
const deleteStudent = async(req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}
const updateStudent = async(req, res) => {
    try {
        let image 
        if(req.file){
            image = "/upload/img/" + req.file.filename
        }else{
            image = await Student.findById(req.params.id).image
        }
        await Student.findByIdAndUpdate(req.params.id, {... req.body, image})
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

const getRooms = async(req, res) => {
    try {
        // const rooms = await Student.find().lean().populate('Students')
        res.render('rooms', {
            // rooms,
            title: 'Xonalar sahifasi'
        })
    } catch (error) {
        console.log(error)
    }
}

const getAdmins = async(req, res) => {
    try {
        const student = await Student.find().lean()
        res.render('admins', {
            student,
            title: 'Adminlar sahifasi'
        })
    } catch (error) {
        console.log(error)
    }
}


const getCreateStudent = async(req, res) => {
    try {
        const student = await Student.find().lean()
        const courses = await Course.find().lean()
        const facultets = await Facultets.find().lean()
        const groups = await Groups.find().lean()
        const rooms = await Rooms.find().lean()
        const stages = await Stages.find().lean()
        

        res.render('studentAdd', {
            student,
            title: 'Talabalar qo\'shish sahifasi',
            data: {courses, groups, rooms, stages, facultets}
        })
    } catch (error) {
        console.log(error)
    }
}

// Setting Pages and Events
const getSetting = async(req, res) => {
    try {
        let stages = await Stages.find().lean()
        const rooms = await Rooms.find().lean()

        const facultets = await Facultets.find().lean()
        const courses = await Course.find().lean()
        const groups = await Groups.find().lean()

        stages.forEach(elem => {
            if(elem.rooms){
                elem.roomNumbers = elem.rooms.length
            }else{
                elem.roomNumbers =  0
            }
        })

        res.render('settings', {
            data: {courses, groups, rooms, stages, facultets},
            title: 'Sozlash sahifasi'
        })
    } catch (error) {
        console.log(error)
    }
}
const createStage = async(req, res) => {
    try {        
        await Stages.create({... req.body})

        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const updateStage = async(req, res) => {
    try {
        await Stages.findByIdAndUpdate(req.params.id, {... req.body})
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const deleteStage = async(req, res) => {
    try {
        await Stages.findByIdAndDelete(req.params.id)
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getHome,
    createStudent,
    deleteStudent,
    updateStudent,
    getRooms,
    getAdmins,
    getCreateStudent,
    getSetting,
    createStage,
    updateStage,
    deleteStage
}