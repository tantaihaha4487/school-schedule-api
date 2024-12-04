const express = require('express');
const { getCurrentPeriod, getCurrentDayAndTime} = require('../utils');
const schedule = require("../schedule.json"); 


const router = express.Router();

 router.get('/', (req, res) => {
    res.json(schedule)
});

 router.get("/current/", (req, res) => {
    res.json(getCurrentPeriod());
});

 router.get("/next/", (req, res) => {
    const { day } = getCurrentDayAndTime();
    const next = schedule[day].find(
        (current) => current.period === getCurrentPeriod().period + 1
    );
    res.json(next);
});

 router.get('/today', (req, res) => {
    const { day } = getCurrentDayAndTime();
    res.json(schedule[day])
});


module.exports = router;