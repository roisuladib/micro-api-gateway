const apiAdapter = require('../../../apiAdapter');
const { URL_COURSE_SERVICE } = process.env;
const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
   try { 
      const imageCourses = await api.post('/api/image-courses/create', req.body);
      return res.json(imageCourses.data); 
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