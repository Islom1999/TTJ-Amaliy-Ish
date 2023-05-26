
const Student = require('../models/students')
const Course = require('../models/course')
const Facultets = require('../models/facultet')
const Groups = require('../models/groups')
const Rooms = require('../models/rooms')
const Stages = require('../models/stage')
const Admins = require('../models/admin')


// Home Pages and Events
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

// Rooms Pages and Events
const getRooms = async(req, res) => {
    try {
        const rooms = await Rooms.find().lean()
            .populate('students')
            .populate('stage')

        const roomsBosh = rooms.filter(room => room.status === false)

        const roomsBand = rooms.filter(room => room.status === true)

        roomsBosh.forEach(elem => {
            if(Boolean(elem.students)){
                elem.studentNumbers = elem.students.length
            }else{
                elem.studentNumbers =  0
            }
        })

        res.render('rooms', {
            rooms,
            roomsBosh,
            roomsBand,
            title: 'Xonalar sahifasi'
        })
    } catch (error) {
        console.log(error)
    }
}

// Admins Pages and Events
const getAdmins = async(req, res) => {
    try {
        const admins = await Admins.find().lean()
        res.render('admins', {
            admins,
            title: 'Adminlar sahifasi'
        })
    } catch (error) {
        console.log(error)
    }
}

// Setting Pages and Events
const getSetting = async(req, res) => {
    try {
        let stages = await Stages.find().lean()
        let rooms = await Rooms.find().lean().populate('stage')

        const facultets = await Facultets.find().lean()
        const courses = await Course.find().lean()
        const groups = await Groups.find().lean()

        
        rooms.forEach(elem => {
            if(Boolean(elem.students)){
                elem.studentNumbers = elem.students.length
            }else{
                elem.studentNumbers =  0
            }
        })

        stages.forEach(elem => {
            if(Boolean(elem.rooms)){
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

const createRooms = async(req, res) => {
    try {        
        await Rooms.create({... req.body, students: []})

        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const updateRooms = async(req, res) => {
    try {
        await Rooms.findByIdAndUpdate(req.params.id, {... req.body})
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const deleteRooms = async(req, res) => {
    try {
        await Rooms.findByIdAndDelete(req.params.id)
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}

const createFacultet = async(req, res) => {
    try {        
        await Facultets.create({... req.body})

        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const updateFacultet = async(req, res) => {
    try {
        await Facultets.findByIdAndUpdate(req.params.id, {... req.body})
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const deleteFacultet = async(req, res) => {
    try {
        await Facultets.findByIdAndDelete(req.params.id)
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}

const createCourse = async(req, res) => {
    try {        
        await Course.create({... req.body})

        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const updateCourse = async(req, res) => {
    try {
        await Course.findByIdAndUpdate(req.params.id, {... req.body})
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const deleteCourse = async(req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id)
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}

const createGroup = async(req, res) => {
    try {        
        await Groups.create({... req.body})

        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const updateGroup = async(req, res) => {
    try {
        await Groups.findByIdAndUpdate(req.params.id, {... req.body})
        res.redirect('/setting')
    } catch (error) {
        console.log(error)
    }
}
const deleteGroup = async(req, res) => {
    try {
        await Groups.findByIdAndDelete(req.params.id)
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

    getSetting,

    createStage,
    updateStage,
    deleteStage,

    createRooms, 
    updateRooms,
    deleteRooms,

    createFacultet,
    updateFacultet,
    deleteFacultet,

    createCourse,
    updateCourse,
    deleteCourse,

    createGroup,
    updateGroup,
    deleteGroup,
}