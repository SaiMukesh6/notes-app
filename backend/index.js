const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const notes = [
  { title: "Note 1", content: "This is the first note." },
  { title: "Note 2", content: "Another note content here." }
];

app.get('/', (req, res) => {
  res.send("Backend is live!");
});

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
