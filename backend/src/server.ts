import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Reva Electronics API is running');
});

// Example endpoint for RFQ submission
app.post('/api/rfq', (req, res) => {
  // Here you would handle RFQ data
  res.json({ status: 'success', message: 'RFQ received' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
