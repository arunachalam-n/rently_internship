
const manDao = require('../dao/man.dao');

var manController = {
    addMan: addMan,
    findMans: findMans,
    findManById: findManById,
    updateMan: updateMan,
    deleteById: deleteById,
}

function addMan(req, res) {
    let man = req.body;
    manDao.create(man).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


function findManById(req, res) {
    manDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    manDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "man deleted successfully",
                man: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMan(req, res) {
    manDao.updateMan(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "man updated successfully",
                man: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMans(req, res) {
    manDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = manController;