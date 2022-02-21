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

// GIT -> versionador (repositório, como fazer o código)
// GITHUB -> plataforma (local, onde fica o código)

app.listen(8080, () => {
    console.log('API rodando...');
})
