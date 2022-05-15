
const {getLogin} = require('../controller/loginController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const express = require("express");

const router = express.Router();

router.get('/',decorateHtmlResponse('Login'),getLogin);

module.exports = router;