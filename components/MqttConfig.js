import mqtt from '@taoqf/react-native-mqtt'

const lightSensorFeed = 'nhatnam23012000/feeds/light-sensor'
const humidSensorFeed = 'nhatnam23012000/feeds/humid-sensor'
const lightFeed = 'nhatnam23012000/feeds/balcony-light'
const waterFeed = 'nhatnam23012000/feeds/balcony-water'

const client = mqtt.connect("mqtt://io.adafruit.com",{
    username: "nhatnam23012000",
    password: 'aio_clUx58bkq87Hg4g8lM94L7yXV8pM'
})

client.on("connect",function () {
    client.subscribe(lightSensorFeed)
    client.subscribe(lightFeed)
    client.subscribe(humidSensorFeed)
    client.subscribe(waterFeed)
})

export default client