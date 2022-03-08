/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();
var path = require("path");
router.get('/', (req: express.Request, res: express.Response) => {
    //res.render('index', { title: 'Express' });
    res.sendFile((path.join(__dirname + '/../views/index.html')));
});

export default router;