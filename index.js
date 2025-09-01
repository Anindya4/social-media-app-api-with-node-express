const express = require("express")
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");


dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

//middlewares:
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port,()=>{
    console.log(`Backend server is running... on port ${port} `)
})