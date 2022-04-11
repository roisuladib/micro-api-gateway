const apiAdapter = require('../../../apiAdapter');
const { URL_ORDER_SERVICE } = process.env;
const api = apiAdapter(URL_ORDER_SERVICE);

module.exports = async (req, res) => {
   try { 
      const webhook = await api.post('/api/webhook', req.body);
      return res.json(webhook.data); 
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