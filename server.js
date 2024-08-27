import express from 'express';

const app = express();
app.use(express.static('attacker'))

app.get("/hello", (req, res) => {
    res.send("hello");
});

const port = 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})