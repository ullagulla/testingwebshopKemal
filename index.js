// Härifrån startar vi upp vår webshop
const mongoose = require('mongoose')

const { app, port } = require('./src/server')
const dbConfig = process.env.MONGO_ATLAS_URL 


// Kicka igång servern
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(dbConfig, dbOptions).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`))
})

module.exports = { app, port }
//test