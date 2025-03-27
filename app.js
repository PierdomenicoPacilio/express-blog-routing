const express = require('express');
const app = express();
const port = 4000;

const posts = require('./data/posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Benvenuto nel mio blog!');
    console.log('Benvenuto nel mio blog!');
});

app.get('/posts', (req, res) => {
    res.send('Ecco i miei posts!');
    console.log('Ecco i miei posts!');
});

app.get('/posts/:id', (req, res) => {
    const currentId = req.params.id;
    const currentPost = posts[Number(currentId)].title;
    res.send(currentPost);
    console.log(req.params.id);
});


app.listen(port, () => {
    console.log('server in ascolto sulla porta = ' + port);
});