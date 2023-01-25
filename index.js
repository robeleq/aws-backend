const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
    res.json({
        message: "Hello Backend Working..."
    })
})

app.get("/api", (req, res) => {
    res.json({
        message: "API Backend..."
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});