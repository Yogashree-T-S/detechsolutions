// =======================
// DE Tech Solutions Backend (CommonJS version)
// =======================
 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ========== CONFIG ==========
const app = express();
const PORT = 5000;

// MongoDB connection URI (password encoded with %23 for '#')
const MONGO_URI =
  "mongodb+srv://jeywetech:%23YogaJeeva2003@filesir.r6vqxsc.mongodb.net/FileSIR?retryWrites=true&w=majority";

const FRONTEND_URL = "http://localhost:3000";

// ========== MIDDLEWARE ==========
app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

// ========== MONGOOSE MODELS ==========
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);
const Project = mongoose.model("Project", projectSchema);

// ========== ROUTES ==========
app.get("/", (req, res) => {
  res.send("✅ DE Tech Solutions Backend Running Successfully");
});

app.get("/api/services", (req, res) => {
  const services = [
    { id: 1, title: "Web Development", desc: "Full-stack React + Node.js." },
    { id: 2, title: "Mobile Apps", desc: "Cross-platform mobile apps." },
    { id: 3, title: "Cloud Solutions", desc: "AWS / DevOps / Hosting." },
  ];
  res.json(services);
});

app.get("/api/projects", async (req, res) => {
  const projects = [
    { id: 1, title: "Web Development", desc: "Full-stack React + Node.js." },
    { id: 2, title: "Mobile Apps", desc: "Cross-platform mobile apps." },
    { id: 3, title: "Cloud Solutions", desc: "AWS / DevOps / Hosting." },
  ];
  res.json(projects);
});

app.post("/api/contact", async (req, res) => {
  try {
    console.log("Incoming contact data:", req.body); // 👈 ADD THIS
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields are required" });

    const contact = new Contact({ name, email, message });
    await contact.save();
    console.log("Contact inserted successfully"); // 👈 ADD THIS

    res.json({ success: true, message: "Contact saved successfully" });
  } catch (err) {
    console.error("Contact save error:", err.message);
    res.status(500).json({ error: "Server error saving contact" });
  }
});

// ========== CONNECT TO DATABASE ==========
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));
