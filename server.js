const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Read word list from file and convert to lowercase array
const words = fs.readFileSync('wordlist.txt', 'utf8').split(/\r?\n/).map(word => word.trim().toLowerCase());

app.post('/check-word', (req, res) => {
    const userWord = req.body.word?.trim().toLowerCase(); // Normalize input word

    if (words.includes(userWord)) {
        res.json({ exists: true, message: "✅ That word is spelled correctly!" });
    } else {
        res.json({ exists: false, message: "❌ That word cannot be found. Check your spelling and try again." });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
