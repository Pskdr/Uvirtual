const {app} = require('./server');
const port = 3001;
app.listen(port, () => {
    console.log(`API node: http://localhost:${port}/`);
})
