<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/dreams.routes')(app);
const port = 8000

app.listen(port, () => console.log(`listening on port: ${port}`));
=======
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/dreams.routes')(app);
const port = 8000

app.listen(port, () => console.log(`listening on port: ${port}`));
>>>>>>> 1b6b9ea39b5f0978c0acfc2020b53e08548f5516
