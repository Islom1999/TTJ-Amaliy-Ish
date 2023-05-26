const {Router} = require('express')
const upload = require('../utils/fileUpload')

const {
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
} = require('../controls/pagesControls')


const router = Router()

router.get('/', getHome)
router.post('/delete/student/:id', deleteStudent)
router.post('/update/student/:id', upload.single('image'), updateStudent)
router.post('/create/student', upload.single('image'), createStudent)

router.get('/rooms', getRooms)
router.get('/admins', getAdmins)

// Settings routers start
router.get('/setting', getSetting)

router.post('/create/stage', createStage)
router.post('/update/stage/:id', updateStage)
router.post('/delete/stage/:id', deleteStage)

router.post('/create/rooms', createRooms)
router.post('/update/rooms/:id', updateRooms)
router.post('/delete/rooms/:id', deleteRooms)

router.post('/create/facultet', createFacultet)
router.post('/update/facultet/:id', updateFacultet)
router.post('/delete/facultet/:id', deleteFacultet)

router.post('/create/course', createCourse)
router.post('/update/course/:id', updateCourse)
router.post('/delete/course/:id', deleteCourse)

router.post('/create/group', createGroup)
router.post('/update/group/:id', updateGroup)
router.post('/delete/group/:id', deleteGroup)




module.exports = router









