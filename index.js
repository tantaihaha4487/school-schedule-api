const express = require("express");
const moment = require("moment-timezone");
const app = express();

const schedule = {
  Monday: [
    {
      period: 0,
      start: "08:30",
      end: "8:40",
      "subject-code": "",
      "subject-name": "Home room",
      room: 0,
      teacher: "",
    },
    {
      period: 1,
      start: "08:40",
      end: "09:30",
      "subject-code": "ว30242",
      "subject-name": "ชีววิทยา",
      room: 321,
      teacher: "ณัฏฐพัชร์",
    },
    {
      period: 2,
      start: "09:30",
      end: "10:20",
      "subject-code": "ค32101",
      "subject-name": "คณิตศาสตร์พื้นฐาน",
      room: 417,
      teacher: "สุวิทย์",
    },
    {
      period: 3,
      start: "10:20",
      end: "11:10",
      "subject-code": "อ30219",
      "subject-name": "อังกฤษ",
      room: 621,
      teacher: "ปราณี",
    },
    {
      period: 4,
      start: "11:10",
      end: "12:00",
      "subject-code": "-",
      "subject-name": "พักกลางวัน",
      room: 0,
      teacher: "",
    },
    {
      period: 5,
      start: "12:00",
      end: "12:50",
      "subject-code": "ว30222",
      "subject-name": "เคมี",
      room: 311,
      teacher: "วาสนา",
    },
    {
      period: 6,
      start: "12:50",
      end: "13:40",
      "subject-code": "ว30222",
      "subject-name": "เคมี",
      room: 311,
      teacher: "วาสนา",
    },
    {
      period: 7,
      start: "13:40",
      end: "14:30",
      "subject-code": "ส32101",
      "subject-name": "สังคม",
      room: 1232,
      teacher: "ทอฟ้า",
    },
    {
      period: 8,
      start: "14:30",
      end: "15:20",
      "subject-code": "ก32901",
      "subject-name": "แนะแนว",
      room: 1232,
      teacher: "มาริสา",
    },
    {
      period: 9,
      start: "15:20",
      end: "16:10",
      "subject-code": "-",
      "subject-name": "free",
      room: 0,
      teacher: "",
    },
  ],
  Tuesday: [
    {
      period: 0,
      start: "08:30",
      end: "8:40",
      "subject-code": "",
      "subject-name": "Home room",
      room: 0,
      teacher: "-",
    },
    {
      period: 1,
      start: "08:40",
      end: "09:30",
      "subject-code": "ท32101",
      "subject-name": "ไทย",
      room: 1232,
      teacher: "อุบลวรรณ์",
    },
    {
      period: 2,
      start: "09:30",
      end: "10:20",
      "subject-code": "ค32201",
      "subject-name": "คณิตเพิ่มเติม",
      room: 1232,
      teacher: "ตะวัน",
    },
    {
      period: 3,
      start: "10:20",
      end: "11:10",
      "subject-code": "อ32101",
      "subject-name": "อังกฤษพื้นฐาน",
      room: 1232,
      teacher: "สุกัญญา",
    },
    {
      period: 4,
      start: "11:10",
      end: "12:00",
      "subject-code": "-",
      "subject-name": "พักกลางวัน",
      room: 0,
      teacher: "-",
    },
    {
      period: 5,
      start: "12:00",
      end: "12:50",
      "subject-code": "ว30202",
      "subject-name": "ฟิสิกส์",
      room: 333,
      teacher: "สุปรียา",
    },
    {
      period: 6,
      start: "12:50",
      end: "13:40",
      "subject-code": "ว30202",
      "subject-name": "ฟิสิกส์",
      room: 333,
      teacher: "สุปรียา",
    },
    {
      period: 7,
      start: "13:40",
      end: "14:30",
      "subject-code": "ส32103",
      "subject-name": "ประวัติศาสตร์สากล",
      room: 1232,
      teacher: "ชุติมา",
    },
    {
      period: 8,
      start: "14:30",
      end: "15:20",
      "subject-code": "ศ32101",
      "subject-name": "แนะแนว",
      room: 533,
      teacher: "นวมนตณ์",
    },
    {
      period: 9,
      start: "15:20",
      end: "16:10",
      "subject-code": "-",
      "subject-name": "free",
      room: 0,
      teacher: "",
    },
  ],
  Wednesday: [
    {
      period: 0,
      start: "08:30",
      end: "8:40",
      "subject-code": "",
      "subject-name": "Home room",
      room: 0,
      teacher: "-",
    },
    {
      period: 1,
      start: "08:40",
      end: "09:30",
      "subject-code": "ส32101",
      "subject-name": "สังคม",
      room: 1232,
      teacher: "ทอฟ้า",
    },
    {
      period: 2,
      start: "09:30",
      end: "10:20",
      "subject-code": "อ32101",
      "subject-name": "อังกฤษพื้นฐาน",
      room: 1232,
      teacher: "สุกัญญา",
    },
    {
      period: 3,
      start: "10:20",
      end: "11:10",
      "subject-code": "ว30222",
      "subject-name": "เคมี",
      room: 314,
      teacher: "วาสนา",
    },
    {
      period: 4,
      start: "11:10",
      end: "12:00",
      "subject-code": "I30201",
      "subject-name": "Is",
      room: 1232,
      teacher: "จรุงจิตต์",
    },
    {
      period: 5,
      start: "12:00",
      end: "12:50",
      "subject-code": "-",
      "subject-name": "พักเที่ยง",
      room: 0,
      teacher: "-",
    },
    {
      period: 6,
      start: "12:50",
      end: "13:40",
      "subject-code": "ว30242",
      "subject-name": "ชีวะ",
      room: 321,
      teacher: "ณัฏฐพัชร์",
    },
    {
      period: 7,
      start: "13:40",
      end: "14:30",
      "subject-code": "ว30242",
      "subject-name": "ชีวะ",
      room: 321,
      teacher: "ณัฏฐพัชร์",
    },
    {
      period: 8,
      start: "14:30",
      end: "15:20",
      "subject-code": "ค32201",
      "subject-name": "คณิตศาสตร์เพิ่มเติม",
      room: 1232,
      teacher: "ตะวัน",
    },
    {
      period: 9,
      start: "15:20",
      end: "16:10",
      "subject-code": "ก32903",
      "subject-name": "กิจกรรม",
      room: 0,
      teacher: "-",
    },
  ],
  Thursday: [
    {
      period: 0,
      start: "08:30",
      end: "8:40",
      "subject-code": "",
      "subject-name": "Home room",
      room: 0,
      teacher: "-",
    },
    {
      period: 1,
      start: "08:40",
      end: "09:30",
      "subject-code": "ค32201",
      "subject-name": "คณิตศาสตร์",
      room: 1232,
      teacher: "ตะวัน",
    },
    {
      period: 2,
      start: "09:30",
      end: "10:20",
      "subject-code": "จ30207",
      "subject-name": "จีน",
      room: 627,
      teacher: "ธันยพัฒน์",
    },
    {
      period: 3,
      start: "10:20",
      end: "11:10",
      "subject-code": "ว30202",
      "subject-name": "ฟิสิกส์",
      room: 333,
      teacher: "สุปรียา",
    },
    {
      period: 4,
      start: "11:10",
      end: "12:00",
      "subject-code": "ว30202",
      "subject-name": "ฟิสิกส์",
      room: 333,
      teacher: "สุปรียา",
    },
    {
      period: 5,
      start: "12:00",
      end: "12:50",
      "subject-code": "-",
      "subject-name": "พักเที่ยง",
      room: 0,
      teacher: "-",
    },
    {
      period: 6,
      start: "12:50",
      end: "13:40",
      "subject-code": "พ32101",
      "subject-name": "พละ",
      room: 542,
      teacher: "อนุกูล",
    },
    {
      period: 7,
      start: "13:40",
      end: "14:30",
      "subject-code": "ว32104",
      "subject-name": "การออกแบบ",
      room: 524,
      teacher: "กฤติยาภรณ์",
    },
    {
      period: 8,
      start: "14:30",
      end: "15:20",
      "subject-code": "-",
      "subject-name": "free",
      room: 0,
      teacher: "-",
    },
    {
      period: 9,
      start: "15:20",
      end: "16:10",
      "subject-code": "-",
      "subject-name": "ชุมนุม",
      room: 0,
      teacher: "-",
    },
  ],
  Friday: [
    {
      period: 0,
      start: "08:30",
      end: "8:40",
      "subject-code": "",
      "subject-name": "Home room",
      room: 0,
      teacher: "-",
    },
    {
      period: 1,
      start: "08:40",
      end: "09:30",
      "subject-code": "ก32905",
      "subject-name": "การงาน",
      room: 1232,
      teacher: "วาสนา",
    },
    {
      period: 2,
      start: "09:30",
      end: "10:20",
      "subject-code": "ท32101",
      "subject-name": "ไทย",
      room: 1232,
      teacher: "อุบลวรรณ์",
    },
    {
      period: 3,
      start: "10:20",
      end: "11:10",
      "subject-code": "ว32206",
      "subject-name": "การออกแบบ",
      room: 523,
      teacher: "กฤษติยาภรณ์",
    },
    {
      period: 4,
      start: "11:10",
      end: "12:00",
      "subject-code": "ต32101",
      "subject-name": "คณิตศาสตร์",
      room: 417,
      teacher: "สุวิทย์",
    },
    {
      period: 5,
      start: "12:00",
      end: "12:50",
      "subject-code": "-",
      "subject-name": "พักเที่ยง",
      room: 0,
      teacher: "-",
    },
    {
      period: 6,
      start: "12:50",
      end: "13:40",
      "subject-code": "I30201",
      "subject-name": "Is",
      room: 1232,
      teacher: "จรุงจิตต์",
    },
    {
      period: 7,
      start: "13:40",
      end: "14:30",
      "subject-code": "-",
      "subject-name": "เพิ่มเติม",
      room: 0,
      teacher: "-",
    },
    {
      period: 8,
      start: "14:30",
      end: "15:20",
      "subject-code": "-",
      "subject-name": "เพิ่มเติม",
      room: 0,
      teacher: "-",
    },
    {
      period: 9,
      start: "15:20",
      end: "16:10",
      "subject-code": "-",
      "subject-name": "ชุมนุม",
      room: 0,
      teacher: "-",
    },
  ],
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");

  if(req.method === "OPTIONS") {
 
    return res.status(200).json({});
  }
  next();
})

// Function to get the current day and time in Bangkok timezone
function getCurrentDayAndTime() {
  const now = moment().tz("Asia/Bangkok");
  const day = now.format("dddd");
  const time = parseInt(now.format("HHmm"), 10);
  // const day = 'Monday'
  // const time = parseInt(`0920`, 10);
  return { day, time };
}

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
app.get("/now/", (req, res) => {
  res.json(getCurrentPeriod());
});
app.get("/next/", (req, res) => {
  const { day } = getCurrentDayAndTime();
  const next = schedule[day].find(
    (current) => current.period === getCurrentPeriod().period + 1,
  );

  res.json(next);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
