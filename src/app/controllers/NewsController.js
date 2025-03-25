
class NewsController {

    // [GET] /new
    index(req, resp) {
        resp.render('news');
    }
}

module.exports = new NewsController;