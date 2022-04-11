const apiAdapter = require('../../apiAdapter');
const { URL_MEDIA_SERVICE } = process.env;
const api = apiAdapter(URL_MEDIA_SERVICE);

module.exports = async (req, res) => {
   try {
      const id = req.params.id;
      const media = await api.delete(`/media/delete/${id}`);
      return res.json(media.data);
   } 
   catch (err) {
      if (err.code === 'ECONNREFUSED') {
         return res.status(503).json({
            status: 'error',
            message: 'Servie Unavailable'
         })
      }
      const { status, data } = err.response;
      return res.status(status).json(data);
   }
}