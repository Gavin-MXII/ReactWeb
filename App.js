const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});