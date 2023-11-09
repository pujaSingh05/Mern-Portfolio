const express  = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


//dotenv configuration
dotenv.config()

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json())


//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes') );


//port
const PORT = process.env.PORT || 8050

//listen
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
