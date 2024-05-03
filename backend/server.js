const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'for me'
});

// Sign up endpoint
app.post('/signup', (req, res) => {
    const { learner_fullname, learner_email, learner_password } = req.body;

    // Check if email or name already exists
    const checkEmailQuery = "SELECT * FROM learner WHERE learner_email = ?";
    const checkNameQuery = "SELECT * FROM learner WHERE learner_fullname = ?";
    db.query(checkEmailQuery, [learner_email], (emailErr, emailResult) => {
        if (emailErr) {
            console.error("Error occurred while checking email:", emailErr);
            return res.status(500).json({ message: 'Error occurred while checking email' });
        }
        if (emailResult.length > 0) {
            return res.status(409).json({ message: 'Email already exists' });
        }
        // If email doesn't exist, check for name
        db.query(checkNameQuery, [learner_fullname], (nameErr, nameResult) => {
            if (nameErr) {
                console.error("Error occurred while checking name:", nameErr);
                return res.status(500).json({ message: 'Error occurred while checking name' });
            }
            if (nameResult.length > 0) {
                return res.status(409).json({ message: 'Name already exists' });
            }
            // If email and name don't exist, proceed with signup
            const insertQuery = "INSERT INTO learner (learner_fullname, learner_email, learner_password) VALUES (?, ?, ?)";
            db.query(insertQuery, [learner_fullname, learner_email, learner_password], (insertErr, insertResult) => {
                if (insertErr) {
                    console.error("Error occurred while inserting data:", insertErr);
                    return res.status(500).json({ message: 'Error occurred while inserting data' });
                }
                console.log("Registered Successfully !");
                return res.status(200).json({ message: 'Registered Successfully !' });
            });
        });
    });
});

// Sign in endpoint
app.post('/signin', (req, res) => {
    const { learner_email, learner_password } = req.body;

    // Perform authentication logic here
    // You can check if the user exists in the database and if the password matches

    // For example, you can query the database to find a user with the provided email and password
    const sql = "SELECT * FROM learner WHERE learner_email = ? AND learner_password = ?";
    db.query(sql, [learner_email, learner_password], (err, result) => {
        if (err) {
            console.error("Error occurred while querying database:", err);
            return res.status(500).json({ message: 'Error occurred while signing in' });
        }

        if (result.length === 0) {
            // No user found with the provided credentials
            return res.status(401).json({ message: 'Invalid email or password' });
        } else {
            // User authenticated successfully
            return res.status(200).json({ message: 'Login Successful!' });
        }
    });
});

app.listen(8081, () => {
    console.log("listening...");
});
