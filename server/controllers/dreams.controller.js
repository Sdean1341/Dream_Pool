const Dream = require('../models/dreams.model');

module.exports = {
    createDream: (req, res) => {
        const { body } = req;
        Dream.create(body)
            .then((dream) =>
            res.json({
                message: "successfully created new dream",
                dream: dream,
                })
            )
            .catch(err => 
                res.status(400).json({
                    message: "something went wrong with Dream.Create()",
                    error:err,
                })
            );
    },

    findAll: (req, res) => {
        Dream.find()
            .then((allDreams) => res.json(allDreams))
            .catch(err =>
                res.status(500).json({
                    message: "something went wrong with dream.find()",
                    error:err,
                })
            );
    },

    findOne: (req, res) => {
        Dream.findById(req.params.id)
            .then(oneDream => res.json(oneDream))
            .catch(err => 
                res.status(400).json({
                        message: "something went wrong with Dream.findById()",
                        error: err,
                    })
                );
    },
    update:(req, res) => {
        Dream.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then(updatedDream => res.json({message: "successfully updated dream", 
            updatedDream: updatedDream }))
            .catch(err => 
                res.status(400).json({
                message: "something went wrong with dream.update()", 
                error:err }))
    },

    destroy: (req, res) => {
        Dream.findByIdAndDelete(req.params.id)
            .then(deleteMessage => res.json({message: deleteMessage}))
            .catch(err => 
                res.status(400).json({
                message: "something went wrong with Dream.destroy()",
                error:err}))
    },
}
