const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.use(express.json());

// Hostinger डेटाबेस कनेक्शन डिटेल्स इथे टाका
const db = mysql.createConnection({
    host: 'localhost',       // जर होस्टिंगवर चालवणार असाल तर सहसा localhost, किंवा Hostinger चा IP
    user: 'तुमचा_डेटाबेस_युझरनेम', 
    password: 'तुमचा_डेटाबेस_पासवर्ड',
    database: 'तुमचे_डेटाबेस_नाव'
});

// डेटाबेस कनेक्ट करा
db.connect((err) => {
    if (err) {
        console.error('डेटाबेस कनेक्शन अयशस्वी: ' + err.stack);
        return;
    }
    console.log('डेटाबेसशी यशस्वीरित्या कनेक्शन झाले आहे.');
});

// बेसिक रूट (Home Route)
app.get('/', (req, res) => {
    res.send('तुमचा Node.js सर्व्हर यशस्वीरित्या सुरू झाला आहे!');
});

// सर्व्हर सुरू करा
app.listen(PORT, () => {
    console.log(`सर्व्हर http://localhost:${PORT} वर सुरू झाला आहे.`);
});
