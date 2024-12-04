const moment = require("moment-timezone");
const schedule = require("./schedule.json");

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
  
  module.exports = { getCurrentPeriod, getCurrentDayAndTime };