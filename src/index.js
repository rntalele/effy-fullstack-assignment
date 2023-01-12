const mongoose = require('mongoose');
const app = require('./app');

const config = require('./config/config');

app.listen(config.port,()=>{
    console.log(`Server started on Port ${config.port}`);
})

mongoose.connect(config.mongoose.url)
.then(()=>console.log('Connected to DB'))
.catch(err=>console.log(err))