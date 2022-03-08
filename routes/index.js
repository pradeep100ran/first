"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const router = express.Router();
router.use(express.static(__dirname + '/views'));
var path = require("path");
router.get('/', (req, res) => {
    //res.render('index', { title: 'Express' });
    res.sendFile((path.join(__dirname + '/../views/index.html')));
});
exports.default = router;
//# sourceMappingURL=index.js.map