const DreamsController = require('../controllers/dreams.controller');

module.exports = (app) => {
    app.post('/api/dream/', DreamsController.createDream);
    app.get('/api/dream/', DreamsController.findAll);
    app.get('/api/dream/:id', DreamsController.findOne);
    app.put('/api/dream/:id', DreamsController.update);
    app.delete('/api/dream/:id', DreamsController.destroy);
}