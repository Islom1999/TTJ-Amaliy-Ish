
const Student = require('../models/students')

const getHome = async(req, res) => {
    try {
        const student = await Student.find().lean()
        res.render('home', {
            student
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


module.exports = {
    getHome,
    createStudent,
    deleteStudent,
    updateStudent
}