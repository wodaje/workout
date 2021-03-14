const express = require("express")
const mongoose = require("mongoose")
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
}).then(() => console.log("Database is Connected"))
  .catch(err => console.log(err))

 app.use(require("./routes/api-routes.js"))
 app.use(require("./routes/html-routes.js"))

app.listen(PORT, () => {
  console.log(` Listening on port ${PORT}`)
})