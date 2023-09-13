const path = require('path');
module.exports = {
    index: (req, res, next) => {
        res.render(path.resolve('./views/index.ejs'), { title: 'Scraper' });
    }
}