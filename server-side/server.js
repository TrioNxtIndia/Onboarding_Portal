const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const customerRoutes = require('./routes/customerRoutes');

const app = express();


app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
}))

app.use('/api', customerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});