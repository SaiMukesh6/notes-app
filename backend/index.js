const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let notes = [];

app.get('/notes', (req, res) => res.json(notes));

app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: Date.now().toString(), title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.put('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) return res.status(404).json({ error: 'Note not found' });
  note.title = req.body.title;
  note.content = req.body.content;
  res.json(note);
});

app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(n => n.id !== req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
