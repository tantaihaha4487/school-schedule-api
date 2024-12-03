const express = require("express");
const moment = require("moment-timezone");
const app = express();

const schedule = require("./schedule.json"); 
const { createTableImage, createDayTableImage } = require("./createTableImage");


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
      }
    next();
});

// Function to get the current day and time in Bangkok timezone
function getCurrentDayAndTime() {
  const now = moment().tz("Asia/Bangkok");
  const day = now.format("dddd");
  const time = parseInt(now.format("HHmm"), 10);
  // const day = 'Monday'
  // const time = parseInt(`0920`, 10);
  return { day, time };
}

// function to get current period based on time
function getCurrentPeriod() {
  const { day, time } = getCurrentDayAndTime();

  console.log(`day: ${day}, time: ${time}`);

  if (schedule.hasOwnProperty(day)) {
    const currentSchedule = schedule[day];
    for (const period of currentSchedule) {
      const startTime = parseInt(period.start.replace(":", ""), 10);
      const endTime = parseInt(period.end.replace(":", ""), 10);

      if (time >= startTime && time < endTime) {
        return period;
      }
    }
    return { message: "No class found" };
  } else {
    return { message: "No schedule available for today" };
  }
}

// Express route to handle requests
app.get('/', (req, res) => {
  res.json(schedule)
})


app.get("/current/", (req, res) => {
  res.json(getCurrentPeriod());
});

// get next period
app.get("/next/", (req, res) => {
  const { day } = getCurrentDayAndTime();
  const next = schedule[day].find(
    (current) => current.period === getCurrentPeriod().period + 1
  );
  res.json(next);
});


app.get('/today', (req, res) => {
  const { day } = getCurrentDayAndTime();
  res.json(schedule[day])
})


app.get('/table', (req, res) => {
  createTableImage(schedule).then((buffer) => {
    res.set('Content-Type', 'image/png');
    res.send(buffer);
  });
})

app.get('/table/today', (req, res) => {
  const { day } = getCurrentDayAndTime();
  createDayTableImage(schedule[day]).then((buffer) => {
    res.set('Content-Type', 'image/png');
    res.send(buffer);
  });
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
