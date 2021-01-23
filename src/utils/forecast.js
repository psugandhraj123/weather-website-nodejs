const request = require('request')
const forecast = (lat, long, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=e75d7cc0ea4d33f5444647bf18c299c5&query=${lat},${long}`
    request({url, json: true }, (error, {body})=>{
        if(error){
           callback('Unable to connect to weather service!')
        } else if(body.error){
            callback('Unable to find location')
        } else {
        const temp = body.current.temperature
        const precip = body.current.precip
        const humid = body.current.humidity
        callback(undefined, "It is currently " + temp + " degrees out.There is a " + precip + "% chance of rain. Humidity is "+ humid +".")
        }
    })
}
module.exports = forecast