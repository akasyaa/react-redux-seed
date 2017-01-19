const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Custom server config goes here

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const config = require('./webpack.config.js');
    app.use(webpackMiddleware(webpack(config)));
} else {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build/index.html'));
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
