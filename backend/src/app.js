const express= require('express');
const app = express();
const connectDB= require('./config/database')
const json= require('json');

app.use(express.json());

const authPuoter= require('./routes/auth');

app.use('/', authPuoter);

connectDB()
.then(()=>{
    console.log("Database connected Successfully.")
    app.listen(4000,()=>{
        console.log('server is running successfully at port 4000')
    })
}).catch((err)=>{
    console.log(err + message);
})