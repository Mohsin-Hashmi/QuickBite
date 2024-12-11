require('dotenv').config();
const express= require('express');
const app = express();
const connectDB= require('./config/database')
const json= require('json');
const cookieparser= require('cookie-parser');

app.use(express.json());
app.use(cookieparser());

const authPuoter= require('./routes/auth');
const profileRouter= require('./routes/profile')
const restaurantRouter= require('./routes/restaurants');

app.use('/', authPuoter);
app.use('/', profileRouter);
app.use('/', restaurantRouter);

connectDB()
.then(()=>{
    console.log("Database connected Successfully.")
    app.listen(process.env.PORT || 5000 ,()=>{
        console.log('server is running successfully at port 4000')
    })
}).catch((err)=>{
    console.log(err.message);
})