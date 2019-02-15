var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET users listing. */
// menampilkan data dari tabel course di database ke views => courses => index
router.get('/', function(req, res, next) {
    models.Course.findAll().then(courses => {
        // render fungsinya sama kaya redirect
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

module.exports = router;
