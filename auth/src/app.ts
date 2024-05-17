import express from 'express';

const app = express();

app.get('*', (req, res) => {
    res.send({ hello: 'hello world' });
});

export { app };
