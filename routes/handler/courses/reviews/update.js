const apiAdapter = require('../../../apiAdapter');
const { URL_COURSE_SERVICE } = process.env;
const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
   try {
      const id = req.params.id;
      const reviews = await api.put(`/api/reviews/update/${id}`, req.body);
      return res.json(reviews.data); 
   }   
   catch (err) {
      if (err.code === 'ECONNREFUSED') {
         return res.status(503).json({
            status: 'error',
            message: 'Servie Unavailable'
         });
      }
      const { status, data } = err.response;
      return res.status(status).json(data);
   }
}