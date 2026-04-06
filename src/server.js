const express = require("express");
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "Setup CI pipeline", status: "done" },
  { id: 2, title: "Build Docker image", status: "pending" }
];

app.get("/", (req, res) => {
  res.send("CIFlowX service is running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/ready", (req, res) => {
  res.status(200).json({ status: "ready" });
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title, status } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    status: status || "pending"
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});