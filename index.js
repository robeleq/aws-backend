const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001;

app.get("/v1/message", (req, res) => {
    res.json({
        message: "The API Backend 2023..."
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});