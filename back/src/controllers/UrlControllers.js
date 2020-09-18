const mongoose = require('mongoose');

const Url = mongoose.model('Url');

module.exports = {
    async index(req, res) {
        const urls = await Url.find();

        return res.json(urls)
    },
    async show(req, res) {
        const url = await Url.find({user: req.params.user});

        return res.json(url);
    },
    async store(req, res) {
        //criação
        const url = await Url.create(req.body);

        return res.json(url)
    },
    async update(req, res) {
        const url = await Url.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(url);
    },

    async destroy(req, res) {
        await Url.findOneAndRemove(req.params.id);

        return res.send();
    }
}