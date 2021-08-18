const mongoose = require('mongoose');
const config  = require('config');
// get val from default.json
const db = config.get('mongoURI');

// connect to mongodb
const connectDB = async () =>{
  // catches error if fail to connect
  // wrap it if you're using async await
  try{
    await mongoose.connect(db,{
      useNewUrlParser: true,
      useUnifiedTopology:true
    });
    console.log('MongoDB Connected....')

  } catch(err){
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  
  }


}

module.exports = connectDB;
