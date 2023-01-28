const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit')

const app  = express();
const PORT = 3005;

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000,
	max: 5,
});

app.use(morgan('combined'));
app.use(limiter);
app.use('/bookingservice', createProxyMiddleware({target: 'http://localhost:3002/', changeOrigin: true}));

app.get('/home', (req, res) => {
    return res.json({message: 'OK'})
});

app.listen(PORT, () => {
    console.log('Server started on PORT: ', PORT);
});