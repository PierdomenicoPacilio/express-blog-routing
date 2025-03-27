const express = require('express');
const app = express();
const port = 4000;

const posts = require('./data/posts');

app.use(express.static('public'));


// HOME

app.get('/', (req, res) => {
    res.send('Benvenuto nel mio blog!');
    console.log('Benvenuto nel mio blog!');
});


// INDEX

app.get('/posts', (req, res) => {
    res.send(posts);
    console.log('Ecco i miei posts!');
});


// SHOW

app.get('/posts/:id', (req, res) => {
    const currentId = req.params.id;
    const currentPost = posts[Number(currentId)].title;
    res.send('Ecco il post:' + currentPost);
    console.log('Ecco il post:' + currentPost);
});



// CREATE

app.post('/posts', (req, res) => {
    res.send('Creazione nuovo post!');
    console.log('Creazione nuovo post!');
});



// UPDATE

app.put('/posts/:id', (req, res) => {
    const currentId = req.params.id;
    res.send('Modifica del post ' + currentId + '!');
    console.log('Modifica del post ' + currentId + '!');
});



// DELETE

app.delete('/posts/:id', (req, res) => {
    const currentId = req.params.id;
    res.send('Cancellazione del post ' + currentId + '!');
    console.log('Cancellazione del post ' + currentId + '!');
});



app.listen(port, () => {
    console.log('server in ascolto sulla porta = ' + port);
});