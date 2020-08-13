let express = require('express');

let router = express();

router.get('/', (req, res) => {
    res.render('index.pug');
});

router.get('/about', (req, res) => {
    res.render('about.pug');
});

router.get('/info', (req, res) => {
    res.render('info.pug')
})

router.listen(3000);