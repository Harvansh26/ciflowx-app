const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CIFlowX</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f4f6f8;
          }
          .card {
            background: white;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            text-align: center;
          }
          h1 {
            margin: 0 0 10px;
            color: #222;
          }
          p {
            margin: 0;
            color: #555;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>CIFlowX</h1>
          <p>CIFlowX service is running successfully on Kubernetes.</p>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});