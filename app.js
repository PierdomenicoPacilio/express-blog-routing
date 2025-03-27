const express = require('express');
const postsRouter = require('./routers/posts')
const app = express();
const port = 4000;


app.use(express.static('public'));
app.use('/posts', postsRouter);


// HOME

app.get('/', (req, res) => {
    res.send('Benvenuto nel mio blog!');
    console.log('Benvenuto nel mio blog!');
});



app.listen(port, () => {
    console.log('server in ascolto sulla porta = ' + port);
});