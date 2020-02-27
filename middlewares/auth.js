const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
	let token = req.headers['x-access-token'] || req.headers['authorization'];
	if (token && token.startsWith('Bearer')) {
		token = token.split(' ')[1];
	}
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = payload;
		next();
	} catch (err) {
		return res.status(401).json({ error: 'Unauthorized Request!!!' });
	}
};
