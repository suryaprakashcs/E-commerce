const app = require('./app');
const dotenv =require('dotenv');

dotenv.config({path:'backend/config/config.env'})

app.listen(process.env.PORT,()=>{
    console.log(`Server started ON PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})