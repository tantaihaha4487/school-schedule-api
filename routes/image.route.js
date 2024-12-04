const express = require('express');
const { createTableImage, createDayTableImage } = require("../createTableImage");
const schedule = require("../schedule.json");
const { getCurrentDayAndTime } = require("../utils");


const router = express.Router();

 router.get('/', (req, res) => {
    createTableImage(schedule).then((buffer) => {
        res.set('Content-Type', 'image/webp');
        res.send(buffer);
    });
})
 router.get('/today', (req, res) => {
    const { day } = getCurrentDayAndTime();
    createDayTableImage(schedule[day]).then((buffer) => {
      res.set('Content-Type', 'image/webp');
      res.send(buffer);
    });
})

  
module.exports = router;