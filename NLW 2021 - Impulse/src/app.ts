import express from 'express';
import "dotenv/config"
import { router } from './routes';
const app = express();
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

app.listen(4000, () => console.log('Server is running on port 4000'));
