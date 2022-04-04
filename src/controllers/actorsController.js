const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = { 
    list: (req, res) => {
        db.Actor.findAll()
        .then((actors) => res.render('actorsList', {actors}))
        .catch((error) => console.log(error));
    },

    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
        .then((actor) => res.render('actorsDetail', {actor}))
        .catch((error) => console.log(error));
    },

    recommended: (req, res) => {
        db.Actor.findAll({
            where: {
                rating: {[Op.gte]: 7}
            },
            order: [['rating', 'DESC']],
            limit: 5
        })
        .then((actors) => res.render('recommendedActors', {actors}))
        .catch((error) => console.log(error));
    }
}