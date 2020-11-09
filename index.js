const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
