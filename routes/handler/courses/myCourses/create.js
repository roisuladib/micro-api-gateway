const apiAdapter = require('../../../apiAdapter');
const { URL_COURSE_SERVICE } = process.env;
const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
   try { 
      const userId = req.user.data.id;
      const courseId = req.body.courses_id;
      const myCourses = await api.post('/api/my-courses/create', {
         users_id: userId,
         courses_id: courseId
      });
      return res.json(myCourses.data); 
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