var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET users listing. */
// menampilkan data dari tabel course di database ke views => courses => index
router.get('/', function(req, res, next) {
    models.Course.findAll().then(courses => {
        // render fungsinya sama kaya redirect yakni pindah (bedanya redirect ngelink ke router, render ngambil dari view)
        res.render('courses/index', {courses: courses})
        // courses di passing datanya ke views => courses => index
    }).catch(err => {
        res.render('courses/index')
    })
});

// get untuk mengambil course
router.get('/create', (req, res) => {
    res.render('courses/create')
})

// menambah course ke database
router.post('/create', (req, res) => {
    const { name } = req.body
    models.Course.create({name}).then(courses => {
        res.redirect('/courses')
    }).catch(err => {
        console.log(err)
        res.redirect('/courses')
    })
})

router.get('/delete/:id', (req, res) => {
    const courseId = req.params.id
    models.Course.findOne({
        where: {
            id: courseId
        }
    }).then(courses => {
        return courses.destroy()
    }).then(courses => {
        res.redirect('/courses')
    }).catch(err => {
        res.redirect('/courses')
    })
})

module.exports = router;
