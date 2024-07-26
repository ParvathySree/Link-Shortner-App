import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import 'dotenv/config'
import { connectDB } from "./config/db.js"
import urlRouter from "./routes/urlRoute.js"
import { redirectToOriginalUrl } from "./controllers/urlController.js"

const app = express()
const port = process.env.PORT

//middleware
app.use(bodyParser.json())
app.use(cors())

connectDB();

app.get('/api', (req, res) => {
    res.send('API endpoint');
});

app.use("/",urlRouter)



app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
}) 