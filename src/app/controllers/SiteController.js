
class SiteController {

    // [GET] /
    index(req, resp) {
        resp.render('home');
    }

    // [GET] /search
    search(req, resp) {
        resp.render('search');
    }
}

export default SiteController;