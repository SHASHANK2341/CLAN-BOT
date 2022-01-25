const app = require('express')();

app.get('/', (req, res) => res.send('Use this link for uptime'));

module.exports = () => {
  app.listen(3000);
}