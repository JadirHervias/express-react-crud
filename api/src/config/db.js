const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Conexión con la base de datos OK');
    }
  }
);

module.exports = mongoose;
