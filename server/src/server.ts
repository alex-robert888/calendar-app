
import express from 'express';
import cors from 'cors';
const volleyball = require('volleyball');

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(volleyball);

// Requests handling
app.get('/', (req, res) => {
    res.json({'status': '✅'});
});


// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    //console.error(err.stack)
    res.status(500).send(err.message)
});

// Listen on port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});