const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express()
app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
}).then(() => console.log("Database is Connected"))
  .catch(err => console.log(err))

// require("./routes/api-routes.js")(app)
// require("./routes/html-routes.js")(app)

app.listen(PORT, () => {
  console.log(`
   ==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.
  `)
})