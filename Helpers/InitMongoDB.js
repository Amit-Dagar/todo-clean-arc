const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    // get mongodb port
    const port = data.connections[0].port;
    console.log("✅ Mongodb server connected on: " + port);
    console.log("----------------------------------------");
  })
  .catch((err) => console.log(err.message));
