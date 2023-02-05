const express = require('express')
const addressRouter = express.Router()
const faker = require('faker')
const { generator } = require('./utils')
// baseurl = /api/address/



addressRouter.get('/city/:count?', (request, response) => {
    const cities = generator(request.params.count, faker.address.city)

    response.json({
        cities
    })
})

addressRouter.get('/county/:count?', (request, response) => {
    const counties = generator(request.params.count, faker.address.county)
    response.json({
        counties
    })
})

addressRouter.get('/country/:count?', (request, response) => {
    const countries = generator(request.params.count, faker.address.country)
    response.json({
        countries
    })
})

addressRouter.get('/zipcode/:count?', (request, response) => {
    const zipcodes = generator(request.params.count, faker.address.zipcode)
    response.json({
        zipcodes
    })
})




module.exports = {
    addressRouter
}