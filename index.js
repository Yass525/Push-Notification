const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require("path");

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const publicVapidKey = 'BMFu1aJkvWYgSKBvc77OMaZc8ZTiqxrnO-cOgYogkvTXry8Gid-gppd80tMxBPlkRvRJPumw1m4Y-eUZR13ZXX8';
const privateVapidKey = 'r4qkZiDJWLMfD6lH0Ay1AZuxBqQ7anJJh3syp4IUkR0';

webpush.setVapidDetails('mailto:yassine525@outlook.com', publicVapidKey, privateVapidKey)

//subscribe route
app.post('/subscribe', function (req, res) {
  const subscription = req.body

  res.status(201).json({})

  const payload =JSON.stringify({title: 'Push Test'})

  webpush.sendNotification(subscription, payload).catch(err => console.error(err))
})

