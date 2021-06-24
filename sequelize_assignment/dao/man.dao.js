const Man = require('../models/Man');

var manDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMan: updateMan,
}

function findAll() {
    return Man.findAll();
}


function findById(id) {
    return Man.findByPk(id);
}

function deleteById(id) {
    return Man.destroy({ where: { id: id } });
}

function create(man) {
    var newMan = new Man(man);
    return newMan.save();
}

function updateMan(man, id) {
    var updateMan = {
        project: man.project,
        engineer: man.engineer,
        manager: man.manager,
    };
    return Man.update(updateMan, { where: { id: id } });
}

module.exports = manDao;