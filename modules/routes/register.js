var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
	console.log('in register post:', req.body);
	res.send('something else');
});

module.exports = router;
