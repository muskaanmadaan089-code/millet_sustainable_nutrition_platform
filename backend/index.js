const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Basic Routes
app.get('/', (req, res) => {
  res.send('Millet Vitality Backend is running!');
});

// Example API route structure based on frontend pages
app.use('/api/users', (req, res) => {
  // TODO: Implement user routes (Onboarding, Dashboard)
  res.json({ message: 'User endpoints' });
});

app.use('/api/consultations', (req, res) => {
  // TODO: Implement consultation routes
  res.json({ message: 'Consultation endpoints' });
});

app.use('/api/knowledge', (req, res) => {
  // TODO: Implement millet knowledge routes
  res.json({ message: 'Knowledge endpoints' });
});

app.use('/api/recipes', (req, res) => {
  // TODO: Implement recipe routes
  res.json({ message: 'Recipe endpoints' });
});

app.use('/api/recommendations', (req, res) => {
  // TODO: Implement recommendation routes
  res.json({ message: 'Recommendation endpoints' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
