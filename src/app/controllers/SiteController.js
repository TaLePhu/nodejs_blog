import Course from '../models/Course.js'

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch(err => res.status(400).json({ error: 'error!!!' }));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default SiteController;
