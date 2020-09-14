
import express from 'express'
import { DBHandler } from './db-handler';

const router = express.Router();
const dbHandler = new DBHandler();

// Log in
router.get('/login', (req, res) => {
    res.send("Log in set up.");
});

router.post('/login', async (req, res, next) => {
    try {
        const user = await dbHandler.getUser(req.body.email, req.body.password);
        res.send(user);
    }
    catch(error) {
        next(error);
    }
});

// Sign up
router.get('/signup', (req, res) => {
    res.send("Sign up set up.");
});

router.post('/signup', async (req, res, next) => {
    try {
        await dbHandler.insertUser(req.body);
        res.send(req.body.username + " added");
    }
    catch(error) {
        next(error);    
    }
});

module.exports = router;

