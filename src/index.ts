import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// GIT -> versionador (repositório, como fazer o código)
// GITHUB -> plataforma (local, onde fica o código)

app.listen(8080, () => {
    console.log('API rodando...');
})
