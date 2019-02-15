var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET users listing. */
// menampilkan data dari tabel student di database ke views => students => index
router.get('/', function(req, res, next) {
    models.Student.findAll().then(students => {
            // render fungsinya sama kaya redirect yakni pindah (bedanya redirect ngelink ke router, render ngambil dari view)
        res.render('students/index', {students: students})
            // students di passing datanya ke views => students => index
    }).catch(err => {
        res.render('students/index')
    })
});

module.exports = router;
