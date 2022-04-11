const apiAdapter = require('../../../apiAdapter');
const { URL_COURSE_SERVICE } = process.env;
const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
   try { 
      const userId = req.user.data.id;
      const reviews = await api.post('/api/reviews/create', {
         users_id: userId,
         ...req.body
      });
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