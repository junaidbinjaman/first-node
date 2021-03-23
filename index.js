const express = require('express')


const app = express()




app.get('/', (req, res) => {
    res.send("I know what the fucking you are doing at my house")
})

app.listen(3000, () => console.log("Listing to port 3000"))