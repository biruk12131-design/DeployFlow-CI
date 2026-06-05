const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/workflow', (req, res) => {
  res.sendFile(path.join(__dirname, '../.github/workflows/ci-cd.yml'));
});

const { GoogleGenAI } = require('@google/genai');

app.post('/api/predict-build', express.json(), async (req, res) => {
  try {
    const builds = req.body.builds;
    if (!builds || !Array.isArray(builds)) {
      return res.status(400).json({ error: 'Invalid builds array' });
    }

    // Default to mock if no API key
    if (!process.env.GEMINI_API_KEY) {
      console.warn('No GEMINI_API_KEY found, using mock prediction');
      return res.json({ probability: "85%" });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const promptText = `Analyze these recent CI builds and predict the percentage probability (e.g. "82%") of the next build passing. Only return the percentage string, nothing else.\n\nBuilds: ${JSON.stringify(builds)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
    });

    res.json({ probability: response.text.trim() || '85%' });
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'Prediction failed', probability: 'Unknown' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
