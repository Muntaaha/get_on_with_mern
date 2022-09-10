import app from "./server.js"
import mongodb, { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
       poolSize: 50,
       wtimeout: 2500,
       useNewUrlParse: true, 
    }
)
