import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 
app.use(cors());
app.use(express.json());

// Ensure the 'Data' directory exists so you don't get errors
const dataDir = path.join(__dirname, 'Data');
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
}

app.post('/api/save-response', (req, res) => {
  const responseData = req.body; 
  const filePath = path.join(__dirname, 'Data', 'responses.json');

  // 1. Read the existing file
  fs.readFile(filePath, 'utf8', (err, data) => {
    let json = [];
    
    // If file exists and isn't empty, parse it
    if (!err && data) {
      try {
        json = JSON.parse(data);
      } catch (parseErr) {
        json = [];
      }
    }

    // 2. Add the new data
    json.push({
      id: Date.now(), 
      submittedAt: new Date().toISOString(),
      answers: responseData // This contains only question/answer from frontend
    });

    // 3. Write it back to the file
    // Note: filePath is available here because it is inside the same function scope
    fs.writeFile(filePath, JSON.stringify(json, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return res.status(500).send('Error saving data');
      }
      res.status(200).send('Response saved successfully!');
    });
  });
});

app.get('/api/questions', (req, res) => {
    const questionsPath = path.join(__dirname, 'Data', 'questions.json');

    fs.readFile(questionsPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading questions file:', err);
            return res.status(500).json({ error: 'Could not find questions file' });
        }
        try {
            res.json(JSON.parse(data));
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing JSON data' });
        }
    });
});

app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});