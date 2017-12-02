var models = require('express').Router();
var expenceDAL = require('../../DAL/expencesDAL.js');

models.get('/', (req, res) => {
    try {    
        expenceDAL.getAll((data) => {
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(400).json({message: 'something went wrong'});
    }
});

models.post('/', (req, res) => {
    try {
        let expenceToSend = req.body;
        expenceToSend['date'] = new Date();
        expenceDAL.addNewObject(expenceToSend, (data) => {
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(400).json({message: 'something went wrong'});
    }
});

models.delete('/:id', (req, res) => {
    try {
        expenceDAL.removeObject(req.params.id, (data)=> {
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(400).json({message: 'something went wrong'});
    }
});

module.exports = models;