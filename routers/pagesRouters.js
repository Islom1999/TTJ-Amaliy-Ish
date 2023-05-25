const {Router} = require('express')
const upload = require('../utils/fileUpload')

const {
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
} = require('../controls/pagesControls')

const router = Router()

router.get('/', getHome)
router.post('/delete/student/:id', deleteStudent)
router.post('/update/student/:id', upload.single('image'), updateStudent)

router.post('/create/student', upload.single('image'), createStudent)
router.get('/create/student', getCreateStudent)

router.get('/rooms', getRooms)
router.get('/admins', getAdmins)

router.get('/setting', getSetting)
router.post('/create/stage', createStage)
router.post('/update/stage/:id', updateStage)
router.post('/delete/stage/:id', deleteStage)


module.exports = router









