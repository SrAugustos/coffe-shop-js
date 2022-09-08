import  express  from "express";
import router from "../routes/routes";
import {Server} from "http"
const app = express();
const server = new Server(app)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)

export default server;