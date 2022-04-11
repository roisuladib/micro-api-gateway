const apiAdapter = require('../../apiAdapter');
const { URL_COURSE_SERVICE, HOSTNAME } = process.env;
const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
   try {
      const courses = await api.get('/api/courses', {
         params: {
            ...req.query
         }
      });
      const coursesData = courses.data;
      const firstPage = coursesData.data.first_page_url.split('?').pop();
      const lastPage = coursesData.data.last_page_url.split('?').pop();
      coursesData.data.first_page_url = `${HOSTNAME}/courses?${firstPage}`;
      coursesData.data.last_page_url = `${HOSTNAME}/courses?${lastPage}`;
      if (coursesData.data.next_page_url) { 
         const nextPage = coursesData.data.next_page_url.split('?').pop();
         coursesData.data.next_page_url = `${HOSTNAME}/courses?${nextPage}`;
      }
      if (coursesData.data.prev_page_url) { 
         const prevPage = coursesData.data.prev_page_url.split('?').pop();
         coursesData.data.prev_page_url = `${HOSTNAME}/courses?${prevPage}`;
      }
      coursesData.data.path = `${HOSTNAME}/courses`;
      return res.json(coursesData);   
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