const express = require('express')
const morgan = require('morgan')
const { nameRouter } = require('./handlers/name')
const { internetRouter } = require('./handlers/internet')
const { addressRouter }  = require ('./handlers/address')

const app = express()
const port = process.env.port || 3001

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.json({ 'message': 'success', 'url': request.url })
})

app.get('/api', (request, response) => {
    response.json({
        'message': 'Api is working..',
        'url': request.url
    })
})

// routers mapping.
app.use('/api/name', nameRouter)
app.use('/api/internet', internetRouter)
app.use('/api/address', addressRouter)

app.use('/*', (req, res) => {
    res.json({ error: 'not found' }).status(404)
})


// creating server
app.listen(
    port,
    () => {
        console.log(`app is listening on port ${port}`)
    }
)