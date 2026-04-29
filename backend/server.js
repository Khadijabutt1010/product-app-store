import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoute from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT =process.env.PORT || 5000
const __dirname = path.resolve()
app.use(express.json());

app.use("/api/products",productRoute )

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    
app.get("/{*path}", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
}

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});