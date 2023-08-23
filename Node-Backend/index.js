import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import bodyParser from 'body-parser'
import sequelize from './src/config/database.js';
import apiRoutes from './src/routes/apiRoutes.js'
const app = express()
dotenv.config();


app.use(express.json())
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
}))

app.use('/api', apiRoutes)

const PORT = process.env.PORT
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});