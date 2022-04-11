const apiAdapter = require('../../apiAdapter');
const { URL_USER_SERVICE } = process.env;
const api = apiAdapter(URL_USER_SERVICE);

module.exports = async (req, res) => {
   try {
      const id = req.user.data.id;
      const user = await api.get(`/users/${id}`);
      return res.json(user.data);
   }
   catch (err) {
      if (err.code === 'ECONNREFUSED') {
         return res.status(500).json({
            status: 'error',
            message: 'Servie Unavailable'
         })
      }
      const { status, data } = err.response;
      return res.status(status).json(data);
   }
}