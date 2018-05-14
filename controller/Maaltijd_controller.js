

let  = require('../model/Maaltijd')

let MaaltijdList = []

// CRUD Maaltijd

module.exports = {
    createMaaltijd(req, res, next){
        console.log('createStudentenhuis was called');
    },
    getMaaltijd(req, res, next){
        console.log('getStudentenhuis was called');
        res.status(200).end();
    },
    getMaaltijdById(req, res, next){
        console.log('getStudentenhuis was called.');
        res.status(200).end();
    },
    putMaaltijd(req, res, next){
        console.log('putStudentenhuis was called.');
        res.status(200).end();
    },
    deleteMaaltijd(req, res, next){
        console.log('deleteStudentenhuis was called.');
        res.status(200).end();
    }
};