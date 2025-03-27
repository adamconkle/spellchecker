const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Read word list from file
const words = fs.readFileSync('wordlist.txt', 'utf8').split(/\r?\n/).map(word => word.trim().toLowerCase());

app.post('/check-word', (req, res) => {
    const userWord = req.body.word?.trim().toLowerCase(); // Get and normalize the input word

    if (words.includes(userWord)) {
        res.json({ exists: true, message: "Correct!" });
    } else {
        res.json({ exists: false, message: "Incorrect!" });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
