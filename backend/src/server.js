import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import cookieParser from "cookie-parser"
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";


const PORT = ENV.PORT || 3000;


const app = express();
app.use(express.json()) //req.body
app.use(cors({origin: ENV.CLIENT_URL, credentials:true}));
app.use(cookieParser());
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT , ()=> {
    console.log("server started at port "+`${PORT}`);
    connectDB();
})