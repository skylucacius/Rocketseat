import express from 'express';
import "dotenv/config"
import { router } from './routes';
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express();
app.use(cors())
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors : {
        origin: "*"
    }
});
io.on("connection", socket => console.log(`Usuário conectado no socket ${socket.id}`))

app.use(express.json())
// rota de login
app.get("/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.use(router)
// rota de callback
app.get("/signin/callback", (req,res) => {
    const { code } = req.query
    return res.json(code)
})

export { serverHttp, io }