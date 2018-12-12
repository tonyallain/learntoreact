const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(80, () => {
    console.log('listening on port 80\nDemo: http://tallain2-w10/');
});
