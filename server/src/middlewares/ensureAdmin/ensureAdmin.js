const axios = require('axios');

const config = require('../../config');

module.exports = async function ensureAdmin(req, res, next) {
  try {
    const token = req.header('token') || '';
    const response = await axios.get(
      `${config.AUTH_SERVER_URL}/auth/verify-admin-token`,
      { headers: { token } },
    );
    const { status } = response.data || {};
    if (status === 200) {
      return next();
    }
    return res.json({
      status: 401,
    });
  } catch (err) {
    err.isTrusted = true;
    err.statusCode = 500;
    next(err);
  }
};
