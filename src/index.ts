import express, { Request, Response } from 'express'
import cors from 'cors'
import { request } from 'http'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (request: Request, response: Response) => {
    return response.send('OK')
})

const port = process.env.PORT || 8080

// GIT -> versionador (repositório, como fazer o código)
// GITHUB -> plataforma (local, onde fica o código)

app.listen(port, () => {
    console.log('API rodando...');
})
