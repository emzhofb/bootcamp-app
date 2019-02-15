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

module.exports = router;
