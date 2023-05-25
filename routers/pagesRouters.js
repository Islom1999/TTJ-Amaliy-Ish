const {Router} = require('express')
const upload = require('../utils/fileUpload')

const {
    getHome,
    createStudent,
    deleteStudent,
    updateStudent
} = require('../controls/pagesControls')

const router = Router()

router.get('/', getHome)
router.post('/create/student', upload.single('image'), createStudent)
router.post('/delete/student/:id', deleteStudent)
router.post('/update/student/:id', upload.single('image'), updateStudent)



module.exports = router









